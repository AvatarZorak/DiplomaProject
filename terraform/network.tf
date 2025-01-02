resource "aws_vpc" "ah-vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "ah-vpc"
  }
}

resource "aws_subnet" "ah-subnet-1" {
  vpc_id = aws_vpc.ah-vpc.id
  cidr_block = "10.0.0.0/24"
  availability_zone = "eu-central-1a"

  tags = {
    Name = "ah-subnet-1"
  }
}

resource "aws_subnet" "ah-subnet-2" {
  vpc_id = aws_vpc.ah-vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "eu-central-1b"

  tags = {
    Name = "ah-subnet-2"
  }
}

resource "aws_internet_gateway" "ah-igw" {
  vpc_id = aws_vpc.ah-vpc.id

  tags = {
    Name = "ah-igw"
  }
}

resource "aws_route_table" "ah-rt" {
  vpc_id = aws_vpc.ah-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.ah-igw.id
  }

  tags = {
    Name = "ah-rt"
  }
}

resource "aws_route_table_association" "ah-rt-association-1" {
  subnet_id = aws_subnet.ah-subnet-1.id
  route_table_id = aws_route_table.ah-rt.id
}

resource "aws_route_table_association" "ah-rt-association-2" {
  subnet_id = aws_subnet.ah-subnet-2.id
  route_table_id = aws_route_table.ah-rt.id
}



