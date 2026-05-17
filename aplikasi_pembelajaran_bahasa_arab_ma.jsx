<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Arabiyah MA - Media Pembelajaran Bahasa Arab</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      min-height: 100vh;
      background: linear-gradient(135deg, #ecfdf5, #ffffff, #fffbeb);
      color: #0f172a;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(255, 255, 255, 0.92);
      border-bottom: 1px solid #d1fae5;
      backdrop-filter: blur(12px);
    }

    .header-container {
      max-width: 1200px;
      margin: auto;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-icon {
      width: 52px;
      height: 52px;
      background: #047857;
      color: white;
      border-radius: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      box-shadow: 0 10px 20px rgba(4, 120, 87, 0.18);
    }

    .brand h1 {
      font-size: 24px;
      font-weight: 800;
    }

    .brand p {
      font-size: 14px;
      color: #64748b;
      margin-top: 3px;
    }

    nav {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .nav-btn {
      border: 1px solid #d1fae5;
      background: white;
      color: #0f172a;
      padding: 10px 14px;
      border-radius: 16px;
      cursor: pointer;
      font-weight: 700;
      transition: 0.2s;
    }

    .nav-btn:hover,
    .nav-btn.active {
      background: #047857;
      color: white;
      border-color: #047857;
    }

    main {
      max-width: 1200px;
      margin: auto;
      padding: 32px 16px;
    }

    .screen {
      display: none;
      animation: fadeUp 0.35s ease;
    }

    .screen.active {
      display: block;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.3fr 0.7fr;
      gap: 24px;
    }

    .hero {
      background: #065f46;
      color: white;
      padding: 44px;
      border-radius: 32px;
      box-shadow: 0 18px 40px rgba(4, 120, 87, 0.18);
    }

    .badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.16);
      color: #ecfdf5;
      padding: 10px 16px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    .hero h2 {
      font-size: 44px;
      line-height: 1.15;
      max-width: 760px;
    }

    .hero p {
      margin-top: 20px;
      color: #d1fae5;
      line-height: 1.8;
      font-size: 17px;
      max-width: 760px;
    }

    .hero-actions {
      margin-top: 28px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .primary-btn,
    .secondary-btn {
      border: none;
      padding: 13px 18px;
      border-radius: 16px;
      cursor: pointer;
      font-weight: 800;
      font-size: 15px;
    }

    .primary-btn {
      background: #fbbf24;
      color: #0f172a;
    }

    .secondary-btn {
      background: rgba(255, 255, 255, 0.12);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .stat-list {
      display: grid;
      gap: 16px;
    }

    .stat-card,
    .card {
      background: white;
      border: 1px solid #d1fae5;
      border-radius: 28px;
      padding: 24px;
      box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
    }

    .stat-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .stat-card small {
      color: #64748b;
      font-weight: 700;
    }

    .stat-card strong {
      display: block;
      margin-top: 6px;
      font-size: 42px;
      color: #065f46;
    }

    .stat-card span {
      background: #ecfdf5;
      color: #047857;
      font-weight: 800;
      padding: 8px 12px;
      border-radius: 14px;
      font-size: 13px;
    }

    .section-title {
      font-size: 28px;
      font-weight: 900;
      margin-bottom: 8px;
    }

    .section-subtitle {
      color: #64748b;
      line-height: 1.7;
      margin-bottom: 22px;
    }

    .lesson-grid {
      display: grid;
      grid-template-columns: 0.35fr 0.65fr;
      gap: 24px;
    }

    .lesson-list {
      display: grid;
      gap: 12px;
    }

    .lesson-btn {
      width: 100%;
      text-align: left;
      border: 1px solid #d1fae5;
      background: white;
      padding: 20px;
      border-radius: 24px;
      cursor: pointer;
      transition: 0.2s;
    }

    .lesson-btn:hover,
    .lesson-btn.active {
      background: #047857;
      color: white;
      border-color: #047857;
      box-shadow: 0 12px 26px rgba(4, 120, 87, 0.18);
    }

    .lesson-level {
      font-size: 13px;
      font-weight: 800;
      opacity: 0.75;
    }

    .lesson-arabic {
      margin-top: 8px;
      font-size: 28px;
      font-weight: 900;
      text-align: right;
      direction: rtl;
    }

    .lesson-subtitle {
      margin-top: 6px;
      font-size: 14px;
      font-weight: 700;
    }

    .lesson-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 18px;
      flex-wrap: wrap;
    }

    .lesson-meta {
      font-size: 13px;
      color: #047857;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .lesson-title-arabic {
      margin-top: 10px;
      font-size: 44px;
      font-weight: 900;
      text
