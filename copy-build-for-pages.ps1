# Script to prepare a gh-pages deployment
# This script copies the contents of the build folder to the root directory
# for manual deployment to the gh-pages branch

# Clear out any files in the root except the build folder and essential files
Get-ChildItem -Path .\ -Exclude "build", ".git", ".gitignore", "copy-build-for-pages.ps1", "node_modules" | 
ForEach-Object {
    if (Test-Path $_ -PathType Container) {
        Write-Host "Removing directory: $_"
        Remove-Item $_ -Recurse -Force
    }
    elseif (Test-Path $_ -PathType Leaf) {
        Write-Host "Removing file: $_"
        Remove-Item $_ -Force
    }
}

# Copy the build contents to the root directory
Write-Host "Copying build contents to root directory..."
Copy-Item -Path .\build\* -Destination .\ -Recurse -Force

Write-Host "Build files copied to root directory successfully!"
Write-Host ""
Write-Host "Now commit these changes and push to your gh-pages branch:"
Write-Host "git add ."
Write-Host "git commit -m 'Deploy to GitHub Pages'"
Write-Host "git push origin gh-pages --force"
