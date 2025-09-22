# Client Portal Setup Guide

This repository contains a client dashboard system that provides project progress tracking, charts, and secure access per client.

## Repository Structure

```
/clients
  /acme/index.html          # ACME Corp dashboard
  /globex/index.html        # Globex Corporation dashboard
/assets
  /app.css                  # Shared styles
  /app.js                   # Dashboard functionality
```

## Setup Instructions

### A) Deploy to Cloudflare Pages

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial client portal setup"
   git remote add origin https://github.com/yourusername/client-portal.git
   git push -u origin main
   ```

2. **Deploy on Cloudflare Pages**
   - Go to Cloudflare → Pages → Create project
   - Connect to Git and select your repository
   - Deploy the main branch
   - Your site will be available at `your-project.pages.dev`

### B) Secure Access with Cloudflare Zero Trust

1. **Set up Zero Trust Application**
   - Go to Zero Trust → Access → Applications
   - Click "Add application" → "Self-hosted"
   - Set Application domain to your `pages.dev` domain

2. **Configure Per-Client Access**

   **For ACME Corp:**
   - Application domain: `your-project.pages.dev`
   - Path: `/clients/acme/*`
   - Policy → Include → Emails: `client@acme.com`
   - Authentication: Enable "One-time PIN"

   **For Globex Corp:**
   - Application domain: `your-project.pages.dev`
   - Path: `/clients/globex/*`
   - Policy → Include → Emails: `client@globex.com`
   - Authentication: Enable "One-time PIN"

3. **Access Control**
   - Clients receive email OTP to access their dashboard
   - No account creation required
   - Each client can only access their specific path

## Adding Charts (Looker Studio Integration)

### Step 1: Prepare Data in Google Sheets
Create a Google Sheet with columns like:
- Date
- Milestone
- % Complete
- Status
- Blockers

### Step 2: Create Looker Studio Report
1. Go to Looker Studio → Create → Data source
2. Select Google Sheets → Choose your sheet
3. Create report with charts (bar chart, scorecard, timeline)
4. Share → Embed → Enable embedding
5. Set sharing to "Anyone with the link can view"
6. Copy the iframe embed code

### Step 3: Embed in Client Dashboard
Replace the placeholder in the HTML:

```html
<!-- Replace this section -->
<div class="chart-container" id="main-chart">
    <iframe src="YOUR_LOOKER_STUDIO_EMBED_URL"
            frameborder="0"
            style="border:0"
            allowfullscreen>
    </iframe>
</div>
```

Or use JavaScript:
```javascript
DashboardUtils.embedChart('main-chart', 'YOUR_LOOKER_STUDIO_EMBED_URL');
```

## Customizing Client Dashboards

### Adding New Clients
1. Create new folder: `/clients/newclient/`
2. Copy existing `index.html` and customize:
   - Update company name and project title
   - Modify progress percentages
   - Update milestones and timeline
   - Change contact information

### Updating Project Data
Use the JavaScript utilities to update dashboard data:

```javascript
// Update statistics
DashboardUtils.updateProjectData({
    stats: {
        progress: 85,
        daysRemaining: 15,
        features: '14/16'
    },
    progress: [
        { id: 'frontend', percentage: 90 },
        { id: 'backend', percentage: 75 }
    ]
});

// Add timeline entry
DashboardUtils.addTimelineItem(
    'Sep 25, 2024',
    'Feature Complete',
    'All core features have been implemented and tested'
);
```

### Styling Customization
Modify `/assets/app.css` to:
- Change color schemes per client
- Adjust layout and spacing
- Add client-specific branding

## Security Features

- **Email OTP Authentication**: No passwords required
- **Path-based Access Control**: Each client only sees their dashboard
- **HTTPS Encryption**: All traffic encrypted via Cloudflare
- **No Data Storage**: Static files only, no sensitive data stored

## Cost Considerations

- **Cloudflare Pages**: Free tier available
- **Zero Trust Access**: Free plan suitable for small teams
- **Looker Studio**: Free with Google account
- **Google Sheets**: Free for basic usage

## Maintenance

### Regular Updates
1. Update progress percentages
2. Add new timeline entries
3. Refresh chart data in Google Sheets
4. Update milestones status

### Auto-refresh (Optional)
Enable automatic dashboard refresh:
```javascript
// Refresh every 5 minutes
DashboardUtils.enableAutoRefresh(5);
```

## Support

For technical support or customization requests:
- Email: hello@4onetwo.dev
- GitHub Issues: Create issues in this repository

## Next Steps

1. Set up your Google Sheets with project data
2. Create Looker Studio reports
3. Deploy to Cloudflare Pages
4. Configure Zero Trust access
5. Share dashboard URLs with clients

Each client will receive a unique URL like:
- `https://your-project.pages.dev/clients/acme/`
- `https://your-project.pages.dev/clients/globex/`