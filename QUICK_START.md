# Quick Start Guide - Angular Application

## ✅ Installation Complete!

All required tools have been installed:
- ✅ Node.js v24.11.1
- ✅ npm v9.6.5
- ✅ Angular CLI v17.3.17
- ✅ Project dependencies installed

## 🚀 Running the Angular Application

### Start the Development Server

Navigate to your Angular project directory:
```powershell
cd D:\angular-ui
```

Start the development server:
```powershell
npm start
```

Or using Angular CLI directly:
```powershell
ng serve
```

The application will be available at: **http://localhost:4200**

The server will automatically reload when you make changes to the source files.

## 📝 Important Notes

### PowerShell Execution Policy

✅ **Already Configured!** The PowerShell execution policy has been set to `RemoteSigned` for your user account, so you can use `npm` and `ng` commands directly.

### Other Useful Commands

**Build for production:**
```powershell
npm run build
```

**Run tests:**
```powershell
npm test
```

**Watch mode (rebuild on changes):**
```powershell
npm run watch
```

## 🔗 Backend Integration

Make sure your Spring Boot backend is running on `http://localhost:8080` for the Angular app to communicate with it.

To start the backend:
```powershell
cd D:\spring-boot-backend
mvn spring-boot:run
```

## ⚠️ Security Notes

The npm install showed some vulnerabilities. These are common in development dependencies. You can address them later with:
```powershell
npm audit fix
```

For now, they won't prevent the application from running.

