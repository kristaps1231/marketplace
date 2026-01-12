<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="logo.css">
</head>
<body>
    <div class="container">
        <div id="signup-form" class="form-container">
            <h2>Reģistrēties</h2>
            <input type="text" id="signup-username" placeholder="Lietotājvārds" required>
            <input type="password" id="signup-password" placeholder="Parole" required>
            <button id="signup-btn">Reģistrēties</button>
            <p>Vai jau esi reģistrējies? <span class="toggle" id="to-login">Pieslēgties</span></p>
        </div>

      
        <div id="login-form" class="form-container" style="display:none;">
            <h2>Pieslēgties</h2>
            <input type="text" id="login-username" placeholder="Lietotājvārds" required>
            <input type="password" id="login-password" placeholder="Parole" required>
            <button id="login-btn">Pieslēgties</button>
            <p>Nav konta? <span class="toggle" id="to-signup">Reģistrēties</span></p>
        </div>

        <div id="welcome" class="form-container" style="display:none;">
            <h2>Sveiks, <span id="user-name"></span>!</h2>
            <button id="logout-btn">Izlogoties</button>
        </div>
    </div>

    <script src="1.js"></script>
</body>
</html>
