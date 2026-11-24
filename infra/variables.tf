variable "domain_name" {
  description = "Apex domain. Its Route 53 hosted zone must already exist."
  type        = string
  default     = "joeysheridan.com"
}

variable "aws_region" {
  description = "Region for the S3 bucket and IAM."
  type        = string
  default     = "us-west-1"
}

variable "github_repository" {
  description = "owner/name of the repo allowed to deploy."
  type        = string
  default     = "Agamago/Website"
}

variable "github_deploy_branch" {
  description = "Only pushes to this branch can assume the deploy role."
  type        = string
  default     = "main"
}

variable "create_github_oidc_provider" {
  description = "Set false if the account already has the token.actions.githubusercontent.com OIDC provider."
  type        = bool
  default     = true
}
