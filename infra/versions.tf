terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # State is local by default. To keep it in S3 instead, create a state bucket
  # once and uncomment this block (see README.md).
  # backend "s3" {
  #   bucket       = "joeysheridan-tfstate"
  #   key          = "website/terraform.tfstate"
  #   region       = "us-west-1"
  #   use_lockfile = true
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project   = "joeysheridan-website"
      ManagedBy = "terraform"
    }
  }
}

# CloudFront only accepts ACM certificates from us-east-1.
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project   = "joeysheridan-website"
      ManagedBy = "terraform"
    }
  }
}
