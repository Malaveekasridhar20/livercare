# Upload Guide - Liver Cure Clinic Website

## 📦 Files to Upload (from dist folder)

### Upload EVERYTHING from the `dist/` folder to your hosting:

```
dist/
├── index.html                          ✅ UPLOAD
├── .htaccess                           ✅ UPLOAD
├── robots.txt                          ✅ UPLOAD
├── sitemap.xml                         ✅ UPLOAD
├── manifest.json                       ✅ UPLOAD
├── favicon.ico                         ✅ UPLOAD
├── liver-cure-logo.png                 ✅ UPLOAD
├── doctor-kumaragurubaran.jpg          ✅ UPLOAD
├── placeholder.svg                     ✅ UPLOAD
├── README-LOGO.txt                     ✅ UPLOAD
├── seo-boost.html                      ✅ UPLOAD
└── assets/                             ✅ UPLOAD (entire folder)
    ├── form-vendor-BrFM1Z7H.js
    ├── hero-image-BTD2berX.jpg
    ├── icons-CmP4f42c.js
    ├── index-DAs9f7u8.js
    ├── index-DS3VhD_G.css
    ├── react-vendor-DfRtTdSx.js
    └── ui-vendor-BhY6gCHC.js
```

## 🚫 DO NOT Upload These (they stay on your computer):

```
❌ node_modules/          (development dependencies)
❌ src/                   (source code - already compiled)
❌ .git/                  (version control)
❌ package.json           (development file)
❌ package-lock.json      (development file)
❌ vite.config.ts         (build configuration)
❌ tsconfig.json          (TypeScript config)
❌ tailwind.config.ts     (Tailwind config)
❌ postcss.config.js      (PostCSS config)
❌ .gitignore             (Git file)
❌ *.md files             (documentation)
```

## 📋 Step-by-Step Upload Instructions

### Method 1: FTP/SFTP (Recommended for Hostinger)

1. **Open your FTP client** (FileZilla, WinSCP, or Hostinger File Manager)

2. **Connect to your hosting:**
   - Host: ftp.livercureclinic.com (or provided by Hostinger)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

3. **Navigate to the correct folder:**
   - Usually: `public_html/` or `www/`
   - This is where your website files go

4. **Upload all files from dist folder:**
   - Select ALL files and folders inside `dist/`
   - Drag and drop to `public_html/`
   - Wait for upload to complete

5. **Verify .htaccess uploaded:**
   - Make sure `.htaccess` is visible (it's a hidden file)
   - If not visible, enable "Show hidden files" in your FTP client

### Method 2: Hostinger File Manager (Web-based)

1. **Login to Hostinger:**
   - Go to: https://hpanel.hostinger.com
   - Login with your credentials

2. **Open File Manager:**
   - Click on "File Manager" in your hosting panel
   - Navigate to `public_html/` folder

3. **Delete old files (if any):**
   - Backup first!
   - Delete old website files
   - Keep any database files if present

4. **Upload new files:**
   - Click "Upload" button
   - Select all files from `dist/` folder
   - Upload in batches if needed (large files first)

5. **Upload assets folder:**
   - Create `assets/` folder if not auto-created
   - Upload all files from `dist/assets/` into it

### Method 3: ZIP Upload (Fastest)

1. **Create ZIP file:**
   - Go to `dist/` folder
   - Select ALL files and folders
   - Right-click → "Send to" → "Compressed (zipped) folder"
   - Name it: `website.zip`

2. **Upload ZIP to hosting:**
   - Login to Hostinger File Manager
   - Navigate to `public_html/`
   - Upload `website.zip`
   - Right-click on uploaded ZIP
   - Click "Extract"
   - Delete ZIP file after extraction

## ✅ Verification Checklist

After uploading, verify these files exist on your server:

### In public_html/ (root folder):
- [ ] index.html
- [ ] .htaccess
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] manifest.json
- [ ] favicon.ico
- [ ] liver-cure-logo.png
- [ ] doctor-kumaragurubaran.jpg

### In public_html/assets/ folder:
- [ ] form-vendor-BrFM1Z7H.js
- [ ] hero-image-BTD2berX.jpg
- [ ] icons-CmP4f42c.js
- [ ] index-DAs9f7u8.js
- [ ] index-DS3VhD_G.css
- [ ] react-vendor-DfRtTdSx.js
- [ ] ui-vendor-BhY6gCHC.js

## 🔧 File Permissions (Important!)

Set correct permissions after upload:

```
Files (.html, .js, .css, .jpg, .png, .txt, .xml):
Permission: 644

Folders (assets/, public_html/):
Permission: 755

.htaccess file:
Permission: 644
```

### How to set permissions in FileZilla:
1. Right-click on file/folder
2. Click "File permissions"
3. Enter: 644 for files, 755 for folders
4. Click OK

## 🌐 Test Your Website

After upload, visit these URLs to test:

1. **Homepage:** https://livercureclinic.com/
2. **About:** https://livercureclinic.com/about
3. **Services:** https://livercureclinic.com/services
4. **Transplant:** https://livercureclinic.com/transplant
5. **Contact:** https://livercureclinic.com/contact
6. **Blog:** https://livercureclinic.com/blog

### Check these things:
- [ ] Website loads without errors
- [ ] All images display correctly
- [ ] Navigation menu works
- [ ] Mobile menu works
- [ ] All links work
- [ ] Contact form works
- [ ] Appointment modal opens
- [ ] Website is responsive on mobile

## 🚨 Common Issues & Solutions

### Issue 1: Website shows "Index of /" or blank page
**Solution:** Make sure `index.html` is in the root folder (public_html/)

### Issue 2: Images not loading
**Solution:** 
- Check `assets/` folder uploaded correctly
- Verify file names match exactly (case-sensitive)
- Check file permissions (644)

### Issue 3: .htaccess not working
**Solution:**
- Make sure file is named exactly `.htaccess` (with dot)
- Enable "Show hidden files" in FTP client
- Check file permissions (644)
- Contact Hostinger if mod_rewrite not enabled

### Issue 4: CSS/JS not loading
**Solution:**
- Clear browser cache (Ctrl+F5)
- Check `assets/` folder uploaded
- Verify file paths in browser console (F12)

### Issue 5: 404 errors on page refresh
**Solution:**
- Make sure `.htaccess` is uploaded
- Check if mod_rewrite is enabled on server
- Contact hosting support

## 📞 Need Help?

**Hostinger Support:**
- Live Chat: Available 24/7 in Hostinger panel
- Email: support@hostinger.com
- Knowledge Base: https://support.hostinger.com

**Website Issues:**
- Email: livercare.trichy@gmail.com
- Phone: +91-95858-97676

## 🎯 Quick Upload Summary

**What to upload:** Everything inside `dist/` folder
**Where to upload:** `public_html/` folder on your hosting
**How to upload:** FTP, File Manager, or ZIP upload
**File permissions:** 644 for files, 755 for folders
**Test after upload:** Visit https://livercureclinic.com/

---

**Total files to upload:** ~15 files + 7 files in assets folder
**Total size:** ~600 KB (very fast to upload!)
**Upload time:** 1-5 minutes depending on internet speed

✅ **You're ready to go live!**
