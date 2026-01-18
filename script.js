    .prediction-box:hover {
      transform: translateY(-4px) scale(1.02);
    }
    .results-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .results-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-color);
    }
    .past-results-toggle {
      font-size: 0.95rem;
      color: var(--accent-color);
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .past-results-toggle:hover {
      color: var(--secondary-color);
      transform: scale(1.05);
    }
    .past-results-container {
      display: none;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      padding: 16px;
      margin-bottom: 20px;
      box-shadow: 0 3px 12px var(--shadow-light);
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
    }
    .past-results-container.show {
      display: block;
    }
    .past-result-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid var(--border-color);
      font-size: 0.9rem;
    }
    .past-result-item:last-child {
      border-bottom: none;
    }
    .past-result-value {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .past-result-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      font-size: 0.8rem;
      font-weight: 600;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }
    .results-container {
      display: flex;
      overflow-x: auto;
      padding: 10px 0;
      margin-bottom: 20px;
      gap: 16px;
      scrollbar-width: thin;
      scrollbar-color: var(--secondary-color) var(--border-color);
    }
    .results-container::-webkit-scrollbar {
      height: 6px;
    }
    .results-container::-webkit-scrollbar-thumb {
      background: var(--secondary-color);
      border-radius: 6px;
    }
    .result-circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      box-shadow: 0 3px 10px var(--shadow-dark);
      border: 2px solid rgba(255, 255, 255, 0.5);
      animation: bounceIn 0.6s ease-out forwards;
    }
    .result-circle .number {
      font-size: 1.2rem;
      font-weight: 700;
    }
    .result-circle .size {
      font-size: 0.75rem;
      font-weight: 500;
    }
    @keyframes bounceIn {
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.15); opacity: 1; }
      100% { transform: scale(1); }
    }
    .history-container {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      padding: 16px;
      box-shadow: 0 4px 16px var(--shadow-light);
      backdrop-filter: blur(5px);
      flex-grow: 1;
      height: 100%;
    }
    .history-item {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 0.5fr;
        gap: 10px;
        align-items: center;
        padding: 10px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        margin-bottom: 8px;
        transition: background 0.2s ease;
    }
    .history-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    .history-period, .history-prediction {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-color);
        word-break: break-word;
        text-align: center;
    }
    .history-actual {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .history-header-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 0.5fr;
        gap: 10px;
        text-align: center;
        padding: 0 10px;
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--accent-color);
        position: sticky;
        top: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 10;
        border-radius: 16px;
        padding: 10px 10px;
    }
    .status-icon {
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      border-radius: 50%;
      font-size: 1rem;
      color: #FFFFFF;
      text-align: center;
      box-shadow: 0 2px 8px var(--shadow-dark);
    }
    .status-icon.win {
      background: var(--success-color);
      animation: pulse 0.6s ease-in-out;
    }
    .status-icon.loss {
      background: var(--error-color);
      animation: shake 0.6s ease-in-out;
    }
    .status-icon.pending {
      background: var(--pending-color);
      animation: rotate 1.5s linear infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.9); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-4px); }
      40%, 80% { transform: translateX(4px); }
    }
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .loading-spinner {
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top: 3px solid #FFFFFF;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    /* Login Page Styles */
    .login-title {
      font-size: 26px;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 16px;
      letter-spacing: 1px;
      background: linear-gradient(90deg, var(--accent-color), var(--secondary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .login-box {
      background: var(--card-bg-color);
      padding: 24px;
      border-radius: 18px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 360px;
      text-align: center;
      border: 1px solid var(--border-color);
      backdrop-filter: blur(8px);
    }
    .device-id {
      font-size: 13px;
      color: var(--text-color);
      margin-bottom: 16px;
      word-break: break-all;
    }
    input {
      width: 100%;
      padding: 10px;
      font-size: 15px;
      border: 1px solid var(--border-color);
      border-radius: 7px;
      margin-bottom: 16px;
      text-align: center;
      transition: border-color 0.3s ease;
      background: rgba(0, 0, 0, 0.2);
      color: var(--text-color);
      font-family: 'El Messiri', sans-serif;
    }
    input:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
    }
    button {
      width: 100%;
      padding: 10px;
      background: var(--button-bg-gradient);
      color: white;
      font-size: 15px;
      font-weight: 600;
      border: none;
      border-radius: 7px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'El Messiri', sans-serif;
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: var(--button-shadow);
    }
    button.secondary {
      background: transparent;
      color: var(--accent-color);
      border: 2px solid var(--accent-color);
      margin-top: 8px;
    }
    button.secondary:hover {
      background: rgba(255, 215, 0, 0.1);
    }
    .error {
      color: var(--error-color);
      font-size: 13px;
      margin-top: 8px;
    }
    .loading {
      color: var(--accent-color);
      font-size: 13px;
      margin-top: 8px;
      display: none;
    }
    @media (max-width: 500px) {
      .login-box {
        padding: 16px;
      }
      .login-title {
        font-size: 22px;
      }
    }
    /* Profile styles */
    .profile-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 20px;
    }
    .profile-info-item {
        background: rgba(0, 0, 0, 0.2);
        padding: 15px;
        border-radius: 12px;
        font-weight: 500;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        word-break: break-all;
    }
    .profile-info-item span {
        font-weight: 700;
        color: var(--accent-color);
    }
    .profile-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-bottom: 20px;
    }
    .profile-stat-item {
        background: rgba(0, 0, 0, 0.2);
        padding: 15px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .profile-stat-item i {
        font-size: 2rem;
    }
    .profile-stat-item .label {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-color);
        margin-top: 5px;
    }
    .profile-stat-item .value {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 5px;
    }
    .win-color { color: var(--success-color); }
    .loss-color { color: var(--error-color); }
    .logout-button {
      background-color: var(--error-color);
    }
    .logout-button:hover {
      background-color: #C13327;
    }

    /* Bottom Navigation Bar Styles */
    .bottom-nav {
      position: sticky;
      bottom: 0;
      width: 100%;
      max-width: 600px;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 -4px 15px rgba(0,0,0,0.2);
      border-top: 1px solid var(--border-color);
      display: flex;
      justify-content: space-around;
      padding: 10px 0;
      border-radius: 20px 20px 0 0;
      z-index: 1000;
      margin: 0 auto;
        }
