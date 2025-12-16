# Branch Protection Setup Instructions

## What Was Added

This pull request adds the necessary files to enable branch protection for the `master` branch:

1. **GitHub Actions CI Workflow** (`.github/workflows/ci.yml`)
   - Automatically runs on pushes to `master` and pull requests targeting `master`
   - Validates that the site builds correctly (Jekyll, CSS, JS, and HTML minification)
   - Creates a "build" status check that can be required before merging

2. **Documentation** (`.github/BRANCH_PROTECTION.md`)
   - Detailed instructions for configuring branch protection in GitHub's UI
   - Explains recommended protection rules
   - Troubleshooting tips

## Next Steps (GitHub Admin Required)

After this PR is merged to `master`, a repository administrator needs to configure branch protection through GitHub's web interface:

### Quick Setup (5 minutes)

1. Go to: https://github.com/algonquindesign/algonquindesign.ca/settings/branches

2. Click **"Add branch protection rule"** or **"Add classic branch protection rule"**

3. Enter branch name pattern: `master`

4. Enable these settings (minimum recommended):
   - ✅ Require a pull request before merging
     - Set "Required approvals" to 1
   - ✅ Require status checks to pass before merging
     - Select the **"build"** status check (will appear after the CI workflow runs once)
   - ✅ Require conversation resolution before merging

5. Click **"Create"** or **"Save changes"**

### Verification

Once configured, the `master` branch will show a shield icon (🛡️) in GitHub, and:
- Direct pushes to `master` will be blocked
- All changes must go through pull requests
- The CI workflow must pass before merging

## Why This Protects Your Branch

**Before branch protection:**
- Anyone with write access can push directly to `master`
- No validation that changes work before they're deployed
- Risk of breaking the production site

**After branch protection:**
- All changes require a pull request
- Automated tests verify the site builds successfully
- Code review ensures quality before merging
- The `master` branch remains stable

## Support

For detailed instructions and troubleshooting, see [BRANCH_PROTECTION.md](BRANCH_PROTECTION.md).
