resource "aws_eks_cluster" "ah-eks" {
  name = "ah-eks"

  access_config {
    authentication_mode = "API"
  }

  version = "1.31"
  role_arn = aws_iam_role.cluster.arn

  bootstrap_self_managed_addons = false

  compute_config {
    enabled = true
    node_pools = ["general-purpose"]
    node_role_arn = aws_iam_role.node.arn
  }

  kubernetes_network_config {
    elastic_load_balancing {
      enabled = true
    }
  }

  storage_config {
    block_storage {
      enabled = true
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
    aws_iam_role_policy_attachment.cluster_AmazonEKSComputePolicy,
    aws_iam_role_policy_attachment.cluster_AmazonEKSBlockStoragePolicy,
    aws_iam_role_policy_attachment.cluster_AmazonEKSLoadBalancingPolicy,
    aws_iam_role_policy_attachment.cluster_AmazonEKSNetworkingPolicy
  ]
}