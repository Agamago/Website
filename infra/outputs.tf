output "site_url" {
  value = "https://${var.domain_name}"
}

output "bucket_name" {
  description = "GitHub Actions variable SITE_BUCKET"
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  description = "GitHub Actions variable CLOUDFRONT_DISTRIBUTION_ID"
  value       = aws_cloudfront_distribution.site.id
}

output "deploy_role_arn" {
  description = "GitHub Actions variable AWS_DEPLOY_ROLE_ARN"
  value       = aws_iam_role.deploy.arn
}

output "aws_region" {
  description = "GitHub Actions variable AWS_REGION"
  value       = var.aws_region
}
