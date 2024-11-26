from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

# Route to show the login page
@app.route('/')
def login():
    return render_template('logstructure.html')  # This will render the login page

# Route to handle the login logic
@app.route('/login', methods=['POST'])
def do_login():
    username = request.form['username']
    password = request.form['password']
    
    # Check if the username and password are correct
    if username == 'admin' and password == 'password':
        return redirect(url_for('dashboard'))  # Redirect to dashboard after successful login
    else:
        return 'Invalid credentials, try again.'  # Show error message if credentials are incorrect

# Route to show the dashboard page after login
@app.route('/dashboard')
def dashboard():
    return render_template('structure.html')  # Render the dashboard page

if __name__ == '__main__':
    app.run(debug=True)  # Run the app in debug mode
