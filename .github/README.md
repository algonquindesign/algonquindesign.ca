# GitHub Configuration

This directory contains GitHub-specific configuration files for the repository.

## Contents

- **workflows/ci.yml** - GitHub Actions CI workflow that validates builds
- **BRANCH_PROTECTION.md** - Instructions for configuring branch protection on the `master` branch

## Branch Protection

To protect the `master` branch and prevent accidental changes, see [BRANCH_PROTECTION.md](BRANCH_PROTECTION.md) for detailed setup instructions.

The CI workflow must run at least once before it can be added as a required status check for branch protection.
