resource "aws_eks_cluster" "ah-eks" {
  name = "ah-eks"

  access_config {
    authentication_mode = "API"
  }

  version = "1.31"
  role_arn = aws_iam_role.cluster.arn

  compute_config {
    enabled = false
  }

  kubernetes_network_config {
    elastic_load_balancing {
      enabled = false
    }
  }

  storage_config {
    block_storage {
      enabled = false
    }
  }

  vpc_config {
    endpoint_private_access = true
    endpoint_public_access = true
    subnet_ids = [
      aws_subnet.ah-subnet-1.id,
      aws_subnet.ah-subnet-2.id
    ]
  }

  depends_on = [
    aws_iam_role_policy_attachment.cluster_AmazonEKSClusterPolicy,
  ]
}

resource "aws_eks_node_group" "ah-eks-node-group" {
  cluster_name    = aws_eks_cluster.ah-eks.name
  node_group_name = "ah-eks-node-group"
  node_role_arn   = aws_iam_role.node.arn
  subnet_ids      = [aws_subnet.ah-subnet-1.id, aws_subnet.ah-subnet-2.id]
  instance_types = ["t3.small"]

  scaling_config {
    desired_size = 2
    max_size     = 2
    min_size     = 2
  }

  depends_on = [
    aws_iam_role_policy_attachment.node_AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.node_AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.node_AmazonEC2ContainerRegistryReadOnly,
  ]
}
