# Infrastructure

Terraform for hosting joeysheridan.com on AWS:

- **S3**: private bucket holding the built site, readable only by CloudFront (Origin Access Control)
- **CloudFront**: CDN and HTTPS, `www` redirected to the apex, `/path` routed to `/path/index.html`
- **ACM**: certificate for the apex and `www`, validated through Route 53
- **Route 53**: A/AAAA alias records in the existing hosted zone
- **IAM**: a role GitHub Actions assumes over OIDC to deploy, limited to this bucket and distribution and to pushes on `main`

Expected cost at personal-site traffic: about $1/month, mostly the hosted zone.

## First-time setup

Needs Terraform 1.6+ and AWS credentials for the account that owns the `joeysheridan.com` hosted zone.

```sh
cd infra
terraform init
terraform plan      # review: about 20 resources, all new
terraform apply     # the certificate validation step takes a few minutes
```

If the account already has a GitHub OIDC provider, add `-var create_github_oidc_provider=false`.

Then in GitHub, under **Settings > Secrets and variables > Actions > Variables**, add these variables from `terraform output`:

| Variable | From output |
| --- | --- |
| `AWS_DEPLOY_ROLE_ARN` | `deploy_role_arn` |
| `AWS_REGION` | `aws_region` |
| `SITE_BUCKET` | `bucket_name` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id` |
| `PUBLIC_CONTACT_EMAIL` | the email to show on the site |

The next push to `main` (or a manual run of the workflow) deploys the site. Until `AWS_DEPLOY_ROLE_ARN` is set, the workflow only builds.

## State

State is local (`infra/terraform.tfstate`, git-ignored). To share it across machines, create an S3 bucket for state and uncomment the `backend "s3"` block in `versions.tf`, then run `terraform init -migrate-state`.
