# Branch Protection Configuration

This document explains how to protect the `master` branch in this repository.

## Why Branch Protection?

Branch protection rules help maintain code quality by:
- Preventing force pushes and deletion of the branch
- Requiring pull request reviews before merging
- Ensuring CI checks pass before code is merged
- Maintaining a clean commit history

## How to Enable Branch Protection

Branch protection is configured through GitHub's web interface. Follow these steps:

### 1. Navigate to Branch Protection Settings

1. Go to the repository on GitHub: https://github.com/algonquindesign/algonquindesign.ca
2. Click on **Settings** (you need admin access)
3. Click on **Branches** in the left sidebar
4. Under "Branch protection rules", click **Add rule** or **Add classic branch protection rule**

### 2. Configure the Branch Pattern

- In the "Branch name pattern" field, enter: `master`

### 3. Recommended Protection Rules

Check the following options:

#### Basic Protection
- ✅ **Require a pull request before merging**
  - ✅ Require approvals (set to at least 1)
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners (optional)

#### Status Checks
- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - Search for and select: **build** (from the CI workflow)

#### Additional Protection
- ✅ **Require conversation resolution before merging**
- ✅ **Require linear history** (optional - prevents merge commits)
- ✅ **Do not allow bypassing the above settings** (recommended)
- ✅ **Restrict who can push to matching branches** (optional - for admin-only pushes)

### 4. Save Changes

Click **Create** or **Save changes** at the bottom of the page.

## Verifying Branch Protection

Once configured, you can verify branch protection is active by:

1. Looking for a shield icon (🛡️) next to the `master` branch name in GitHub
2. Attempting to push directly to `master` - it should be blocked
3. The branch should show as "Protected" in the branches list

## CI Workflow

This repository includes a GitHub Actions CI workflow (`.github/workflows/ci.yml`) that:
- Runs on every push to `master` and pull request targeting `master`
- Validates that the Jekyll site builds successfully
- Checks CSS and JavaScript build processes
- Ensures HTML minification works

This workflow creates a required status check called "build" that can be required to pass before merging.

## Troubleshooting

### "No status checks found" when configuring branch protection
- Make sure the CI workflow has run at least once
- Push this branch or create a pull request to trigger the workflow
- Wait for the workflow to complete, then refresh the branch protection settings

### Changes are being pushed directly to master
- Verify you've clicked "Save changes" on the branch protection settings
- Check that "Do not allow bypassing the above settings" is enabled
- Ensure the rule applies to administrators if needed

### CI workflow is failing
- Check the Actions tab for error details
- Ensure all dependencies in package.json and Gemfile are correct
- Verify Ruby and Node.js versions are compatible

## Additional Resources

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
