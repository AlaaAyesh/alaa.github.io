---
title: Library Management System (Desktop Application)
classes: wide
header:
  teaser: https://github.com/user-attachments/assets/7d60a84a-20bd-494e-8a7a-ebcc4ac84183
ribbon: MidnightBlue
categories:
  - Desktop_Applications
toc: true
---


# Stationery Store Management System

**Stationery Store Management System** is a professional desktop application built using Windows Forms (.NET 8.0) for streamlined management of stationery shops. It offers comprehensive modules for handling products, sales, inventory, user roles, and reporting—featuring a modern right-to-left (Arabic) interface.

---

## Features and Functionalities

### Authentication & Roles
1. **Secure Login System:**
   - Role-based access for **Admins** and **Users**.
   - Admin users manage system configurations and user accounts.
   - Regular users perform sales and inventory tasks.

---

### Product & Category Management
1. **Product Operations:**
   - Add, update, delete, and search for products.
   - Filter products by **category** and **price**.
   - Track stock levels in real-time.

2. **Category Organization:**
   - Create and manage product categories.
   - Simplify inventory browsing and classification.

---

### Sales & Invoice Handling
1. **Cart System:**
   - Add items to a cart, adjust quantities, and remove products.

2. **Real-time Inventory Updates:**
   - Automatically reflect product stock changes during transactions.

3. **Invoice Generation:**
   - Automatically create and print detailed invoices for each sale.

---

### Reports & Analytics
- Generate detailed **sales** and **revenue** reports.
- Filter reports by **custom date ranges**.
- View and print reports for business insights.

---

### User Administration
- Admins can add, edit, delete, and assign roles to users.
- Role-based control ensures secure and structured access.

---

### Dashboard Overview
- View:
  - Total products and stock levels.
  - Revenue summary.
  - Sales statistics and performance indicators.

---

### Backup and Restore
- Create data backups via the built-in **backup** tool.
- Secure storage and easy recovery of system data.

---

### Localization & RTL Support
- Right-to-left (RTL) UI tailored for Arabic users.
- Fully localized text and layout for intuitive interaction.

---

## Screenshots

### Login Screens
- ![Login Screen 1](assets/login-1.png)
- ![Login Screen 2](assets/login-2.png)
- ![Login as Admin](assets/login-3.png)
- ![Login as User](assets/login-4.png)

---

### Home Screen
- ![Home Screen](assets/home-1.png)

---

### Sell Screens
- ![Sell Screen 1](assets/sell-1.png)
- ![Sell Screen 2](assets/sell-2.png)
- ![Sell Screen 3](assets/sell-3.png)
- ![Sell Screen 4](assets/sell-4.png)
- ![Sell Screen 5](assets/sell-5.png)
- ![Sell Screen 6](assets/sell-6.png)
- ![Sell Screen 7](assets/sell-7.png)

---

### Category Screens
- ![Category Screen 1](assets/category-1.png)
- ![Category Screen 2](assets/category-2.png)
- ![Category Screen 3](assets/category-3.png)
- ![Category Screen 4](assets/category-4.png)

---

### Product Screens
- ![Product Screen 1](assets/product-1.png)
- ![Product Screen 2](assets/product-2.png)
- ![Product Screen 3](assets/product-3.png)
- ![Product Screen 4](assets/product-4.png)
- ![Product Screen 5](assets/product-5.png)

---

### Reports Screens
- ![Reports Screen 1](assets/report-1.png)
- ![Reports Screen 2](assets/report-2.png)
- ![Reports Screen 3](assets/report-3.png)

---

### Users Screen
- ![Users Screen](assets/user-1.png)

---

### Backup
- ![Backup Icon](Resources/Data-Database-Backup-icon.png)
- ![Backup Screenshot](assets/backup-2.png)

---

## Used Technologies

- **.NET 8.0** – Windows Forms
- **C#** – Core logic and backend
- **Entity Framework Core** – ORM for SQL Server/SQLite
- **Microsoft.Data.Sqlite** – Lightweight embedded DB option

---

## Project Structure

- `Entities/` – Data models (User, Product, Category, Order, etc.)
- `Forms/` – UI forms (Login, Home, Sell, Products, Reports, etc.)
- `Data/` – DbContext and EF Core logic
- `Migrations/` – EF database migration files
- `Resources/` – Icons, screenshots, and RTL support assets

---

## How to Use

1. Log in as Admin/User based on credentials.
2. Use the dashboard to navigate to products, sales, reports, or user admin.
3. Add and manage products, categories, and users as needed.
4. Perform sales and print invoices.
5. Generate and export reports.
6. Regularly back up data from the backup menu.

---

## Setup Instructions

### Prerequisites

- Windows 10/11  
- [.NET 8.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)  
- SQL Server (Default) or SQLite  

### Steps

```bash
# 1. Clone the repository
git clone <your-repo-url>

# 2. Open in Visual Studio
# 3. Set startup project and run
# 4. Configure database connection string in appsettings.json if needed



## Here are  ScreenShoots Of The Project


<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/865dd7a5-4f9d-4419-be48-ce07ac90ab72"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/f565fa05-52fe-4451-8001-23cb2cc4a5ec"> <br><be>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/978b2670-e6fb-4e37-8f32-81a765da3049"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/6d59bef9-4278-4918-b0a0-104ca4807d8d"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/7d5a004f-0f32-4d95-9b10-96b54e88141a"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/d9db5664-8633-4011-9727-17fc10b79205"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/5b9ee391-df3b-49cd-b973-87e88efd0ffa"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/32dc6ca4-7b7e-4fd3-ab16-b9b9294693f4"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/70430b1d-b070-42f3-919b-830f2ea4f29e"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/55a1ab3f-08f1-424e-a679-3b00f387f8cf"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/6799a687-2c5c-46d5-b645-fc45faca2874"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/a706483e-5f08-4570-b3aa-5f364a7c960a"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/854d982f-6391-44c5-bbcd-5fe81cce6540"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/e1f4238c-7db8-4757-8599-db81ac29515b"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/c408ef61-3cbf-4ab0-8cbc-d37d73c08cef"> <br><be>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/87c2998e-38c1-4145-acba-5d8935f895e6"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/a50042ce-f157-45be-bd37-28ce5f8dae9a"> <br><br>
<img   alt="Coding" width="600" src="https://github.com/user-attachments/assets/fe63b539-204c-4e26-a152-f5c187204f44"> <br><br>


> # [Demonstration Video](https://youtu.be/o_8d6xQnCK8)
> # [Check The Code Out](https://github.com/HusseinAdel7/Lab_Master)
