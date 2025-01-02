resource "aws_ecr_repository" "frontend" {
  name = "ah-frontend-repository"
  image_tag_mutability = "MUTABLE"
}

resource "aws_ecr_repository" "backend" {
  name = "ah-backend-repository"
  image_tag_mutability = "MUTABLE"
}