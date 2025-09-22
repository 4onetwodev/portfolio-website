// Client Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    initializeExcelUpload();
});

function initializeDashboard() {
    loadSavedData(); // Load any previously saved Excel data
    animateProgressBars();
    animateCounters();
    updateLastUpdated();
}

// Animate progress bars on page load
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');

    setTimeout(() => {
        progressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage + '%';
        });
    }, 500);
}

// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('.stat-value[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            // Format number based on type
            const suffix = counter.getAttribute('data-suffix') || '';
            const prefix = counter.getAttribute('data-prefix') || '';

            if (suffix === '%') {
                counter.textContent = prefix + Math.round(current) + suffix;
            } else if (suffix === 'days') {
                counter.textContent = prefix + Math.round(current) + ' ' + suffix;
            } else {
                counter.textContent = prefix + Math.round(current) + suffix;
            }
        }, 16);
    });
}

// Update last updated timestamp
function updateLastUpdated() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const now = new Date();
        lastUpdatedElement.textContent = now.toLocaleDateString() + ' at ' + now.toLocaleTimeString();
    }
}

// Function to update project data (can be called via API)
function updateProjectData(data) {
    // Update stats
    if (data.stats) {
        Object.keys(data.stats).forEach(key => {
            const element = document.getElementById('stat-' + key);
            if (element) {
                element.textContent = data.stats[key];
            }
        });
    }

    // Update progress bars
    if (data.progress) {
        data.progress.forEach(item => {
            const progressBar = document.getElementById('progress-' + item.id);
            if (progressBar) {
                progressBar.style.width = item.percentage + '%';
                const percentageElement = document.getElementById('percentage-' + item.id);
                if (percentageElement) {
                    percentageElement.textContent = item.percentage + '%';
                }
            }
        });
    }

    // Update milestones
    if (data.milestones) {
        const milestonesContainer = document.getElementById('milestones-container');
        if (milestonesContainer) {
            milestonesContainer.innerHTML = '';
            data.milestones.forEach(milestone => {
                const milestoneElement = createMilestoneElement(milestone);
                milestonesContainer.appendChild(milestoneElement);
            });
        }
    }

    updateLastUpdated();
}

// Create milestone element
function createMilestoneElement(milestone) {
    const div = document.createElement('div');
    div.className = `milestone ${milestone.status}`;

    const icon = document.createElement('div');
    icon.className = 'milestone-icon';
    icon.innerHTML = milestone.status === 'completed' ? '✓' :
                    milestone.status === 'in-progress' ? '⟳' : '○';

    const content = document.createElement('div');
    content.className = 'milestone-content';
    content.innerHTML = `
        <h4>${milestone.title}</h4>
        <p>${milestone.description}</p>
    `;

    div.appendChild(icon);
    div.appendChild(content);

    return div;
}

// Function to add timeline item
function addTimelineItem(date, title, description) {
    const timeline = document.getElementById('timeline-container');
    if (timeline) {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-date">${date}</div>
            <div class="timeline-content">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>
        `;
        timeline.insertBefore(timelineItem, timeline.firstChild);
    }
}

// Function to embed Looker Studio chart
function embedChart(containerId, chartUrl) {
    const container = document.getElementById(containerId);
    if (container && chartUrl) {
        container.innerHTML = `
            <iframe src="${chartUrl}"
                    frameborder="0"
                    style="border:0"
                    allowfullscreen>
            </iframe>
        `;
    }
}

// Function to show/hide chart
function toggleChart(chartId) {
    const chart = document.getElementById(chartId);
    if (chart) {
        chart.style.display = chart.style.display === 'none' ? 'block' : 'none';
    }
}

// Refresh dashboard data
function refreshDashboard() {
    // This would typically fetch data from an API
    // For now, we'll just update the timestamp
    updateLastUpdated();

    // Show refresh animation
    const container = document.querySelector('.dashboard-container');
    container.style.opacity = '0.7';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 500);
}

// Auto-refresh functionality (optional)
function enableAutoRefresh(intervalMinutes = 5) {
    setInterval(refreshDashboard, intervalMinutes * 60 * 1000);
}

// Excel File Processing
function initializeExcelUpload() {
    const uploadArea = document.getElementById('excel-upload-area');
    const fileInput = document.getElementById('excel-file-input');

    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
        uploadArea.addEventListener('dragover', handleDragOver);
        uploadArea.addEventListener('drop', handleFileDrop);
        fileInput.addEventListener('change', handleFileSelect);
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleFileDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        processExcelFile(files[0]);
    }
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        processExcelFile(files[0]);
    }
}

function processExcelFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Save workbook data to localStorage
            const workbookData = {
                fileName: file.name,
                uploadDate: new Date().toISOString(),
                sheets: {}
            };

            // Process different sheets
            const sheets = workbook.SheetNames;
            sheets.forEach(sheetName => {
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // Save sheet data to localStorage
                workbookData.sheets[sheetName] = jsonData;

                if (sheetName.toLowerCase().includes('overview')) {
                    updateOverviewData(jsonData);
                } else if (sheetName.toLowerCase().includes('progress')) {
                    updateProgressData(jsonData);
                } else if (sheetName.toLowerCase().includes('timeline')) {
                    updateTimelineData(jsonData);
                }
            });

            // Save to localStorage
            localStorage.setItem('dashboardData', JSON.stringify(workbookData));

            generateCharts(workbook);
            updateDataStatus(file.name, new Date());
            showSuccessMessage('Excel file processed and saved permanently!');
        } catch (error) {
            showErrorMessage('Error processing Excel file: ' + error.message);
        }
    };
    reader.readAsArrayBuffer(file);
}

function updateOverviewData(data) {
    if (data.length > 0) {
        const latest = data[data.length - 1];

        // Update stat cards
        updateStatCard('overall-progress', latest['Overall Progress %'] || latest['Overall Progress']);
        updateStatCard('pos-progress', latest['POS Progress %'] || latest['POS Progress']);
        updateStatCard('website-progress', latest['Website Progress %'] || latest['Website Progress']);
        updateStatCard('integration-progress', latest['Integration Progress %'] || latest['Integration Progress']);
    }
}

function updateProgressData(data) {
    data.forEach(item => {
        const moduleName = item.Module || item.module;
        const progress = item['Progress %'] || item.Progress;

        if (moduleName && progress !== undefined) {
            updateProgressBar(moduleName, progress);
        }
    });
}

function updateTimelineData(data) {
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer && data.length > 0) {
        // Clear existing timeline
        timelineContainer.innerHTML = '';

        // Add new timeline items (reverse order for latest first)
        data.reverse().forEach(item => {
            const date = item.Date || item.date;
            const milestone = item.Milestone || item.milestone;
            const description = item.Description || item.description;

            if (date && milestone) {
                addTimelineItem(formatDate(date), milestone, description || '');
            }
        });
    }
}

function updateStatCard(id, value) {
    const element = document.querySelector(`[data-stat="${id}"]`) || document.getElementById(id);
    if (element && value !== undefined) {
        element.textContent = value + (typeof value === 'number' ? '%' : '');
    }
}

function updateProgressBar(moduleName, progress) {
    // Find progress bar by module name (convert to ID format)
    const moduleId = moduleName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const progressBar = document.getElementById(`progress-${moduleId}`);
    const percentageSpan = document.getElementById(`percentage-${moduleId}`);

    if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('data-percentage', progress);
    }

    if (percentageSpan) {
        percentageSpan.textContent = progress + '%';
    }
}

function generateCharts(workbook) {
    const chartContainer = document.getElementById('excel-charts');
    if (!chartContainer) return;

    chartContainer.innerHTML = '<h3>📊 Excel Data Charts</h3>';

    // Create progress chart
    const progressSheet = workbook.Sheets['Module Progress'] || workbook.Sheets['Progress Breakdown'];
    if (progressSheet) {
        const progressData = XLSX.utils.sheet_to_json(progressSheet);
        createProgressChart(progressData, chartContainer);
    }

    // Create timeline chart
    const overviewSheet = workbook.Sheets['Project Overview'];
    if (overviewSheet) {
        const overviewData = XLSX.utils.sheet_to_json(overviewSheet);
        createTimelineChart(overviewData, chartContainer);
    }
}

function createProgressChart(data, container) {
    const chartDiv = document.createElement('div');
    chartDiv.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h4>Module Progress</h4>
            <canvas id="progress-chart" width="400" height="200"></canvas>
        </div>
    `;
    container.appendChild(chartDiv);

    const ctx = document.getElementById('progress-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.Module || item.module),
            datasets: [{
                label: 'Progress %',
                data: data.map(item => item['Progress %'] || item.Progress),
                backgroundColor: 'rgba(52, 152, 219, 0.8)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function createTimelineChart(data, container) {
    const chartDiv = document.createElement('div');
    chartDiv.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h4>Progress Over Time</h4>
            <canvas id="timeline-chart" width="400" height="200"></canvas>
        </div>
    `;
    container.appendChild(chartDiv);

    const ctx = document.getElementById('timeline-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => formatDate(item.Date || item.date)),
            datasets: [{
                label: 'Overall Progress %',
                data: data.map(item => item['Overall Progress %'] || item['Overall Progress']),
                borderColor: 'rgba(155, 89, 182, 1)',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString();
}

function showSuccessMessage(message) {
    showMessage(message, 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Load saved data from localStorage
function loadSavedData() {
    const savedData = localStorage.getItem('dashboardData');
    if (savedData) {
        try {
            const workbookData = JSON.parse(savedData);

            // Process saved sheets
            Object.keys(workbookData.sheets).forEach(sheetName => {
                const jsonData = workbookData.sheets[sheetName];

                if (sheetName.toLowerCase().includes('overview')) {
                    updateOverviewData(jsonData);
                } else if (sheetName.toLowerCase().includes('progress')) {
                    updateProgressData(jsonData);
                } else if (sheetName.toLowerCase().includes('timeline')) {
                    updateTimelineData(jsonData);
                }
            });

            // Generate charts from saved data
            generateChartsFromSavedData(workbookData.sheets);

            // Update status
            updateDataStatus(workbookData.fileName, new Date(workbookData.uploadDate));

            console.log('Dashboard data loaded from previous session');
        } catch (error) {
            console.error('Error loading saved data:', error);
            localStorage.removeItem('dashboardData'); // Clear corrupted data
        }
    }
}

// Generate charts from saved data
function generateChartsFromSavedData(sheets) {
    const chartContainer = document.getElementById('excel-charts');
    if (!chartContainer) return;

    chartContainer.innerHTML = '<h3>📊 Project Analytics (From Saved Data)</h3>';

    // Create progress chart
    const progressData = sheets['Module Progress'] || sheets['Progress Breakdown'];
    if (progressData) {
        createProgressChart(progressData, chartContainer);
    }

    // Create timeline chart
    const overviewData = sheets['Project Overview'];
    if (overviewData) {
        createTimelineChart(overviewData, chartContainer);
    }
}

// Update data status indicator
function updateDataStatus(fileName, uploadDate) {
    // Create or update status indicator
    let statusDiv = document.getElementById('data-status');
    if (!statusDiv) {
        statusDiv = document.createElement('div');
        statusDiv.id = 'data-status';
        statusDiv.className = 'data-status';

        const uploadArea = document.querySelector('.excel-upload-container');
        if (uploadArea) {
            uploadArea.appendChild(statusDiv);
        }
    }

    const timeAgo = getTimeAgo(uploadDate);
    statusDiv.innerHTML = `
        <div style="background: #d5f4e6; color: #27ae60; padding: 10px; border-radius: 5px; margin-top: 10px; text-align: center;">
            ✅ <strong>Data Loaded:</strong> ${fileName}<br>
            <small>Last updated: ${timeAgo}</small>
        </div>
    `;
}

// Helper function to show time ago
function getTimeAgo(date) {
    const now = new Date();
    const diffMs = now - new Date(date);
    const diffMins = Math.round(diffMs / 60000);
    const diffHours = Math.round(diffMs / 3600000);
    const diffDays = Math.round(diffMs / 86400000);

    if (diffMins < 60) {
        return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
}

// Clear saved data function
function clearSavedData() {
    localStorage.removeItem('dashboardData');
    location.reload(); // Refresh page to show default state
}

// Export functions for use in individual client pages
window.DashboardUtils = {
    updateProjectData,
    addTimelineItem,
    embedChart,
    toggleChart,
    refreshDashboard,
    enableAutoRefresh,
    processExcelFile,
    updateOverviewData,
    updateProgressData,
    updateTimelineData
};