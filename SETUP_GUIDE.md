# Angular Development Environment Setup Guide

## Step 1: Install Node.js and npm

Node.js is required to run Angular applications. It includes npm (Node Package Manager).

### Installation Options:

**Option A: Download from Official Website (Recommended)**
1. Visit: https://nodejs.org/
2. Download the **LTS (Long Term Support)** version (recommended for most users)
3. Run the installer and follow the installation wizard
4. Make sure to check "Add to PATH" during installation
5. Restart your terminal/PowerShell after installation

**Option B: Using Chocolatey (if you have it installed)**
```powershell
choco install nodejs-lts
```

**Option C: Using winget (Windows Package Manager)**
```powershell
winget install OpenJS.NodeJS.LTS
```

### Verify Installation:
After installation, restart your terminal and run:
```powershell
node --version
npm --version
```

You should see version numbers (e.g., v20.x.x for Node.js and 10.x.x for npm).

## Step 2: Install Angular CLI Globally

Once Node.js and npm are installed, install Angular CLI globally:

```powershell
npm install -g @angular/cli
```

This may take a few minutes. After installation, verify it:
```powershell
ng version
```

## Step 3: Install Project Dependencies

Navigate to your Angular project directory and install dependencies:

```powershell
cd D:\angular-ui
npm install
```

This will install all the dependencies listed in `package.json`. This may take several minutes.

## Step 4: Run the Angular Application

After dependencies are installed, you can start the development server:

```powershell
npm start
```

Or using Angular CLI directly:
```powershell
ng serve
```

The application will be available at: `http://localhost:4200`

## Troubleshooting

### If npm commands are not recognized after installing Node.js:
1. Close and reopen your terminal/PowerShell
2. Restart your computer if needed
3. Verify Node.js is in your PATH: `$env:PATH`

### If you get permission errors:
Run PowerShell as Administrator and try again.

### If Angular CLI installation fails:
Try using `npm install -g @angular/cli@latest` or check your internet connection.

