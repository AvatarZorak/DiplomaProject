terraform {
    backend "s3" {
        bucket = "ah-tfstate-files"
        key = "terraform.tfstate"
        region = "eu-central-1"
        dynamodb_table = "ah-tfstate-lock"
        encrypt = true
    }
}