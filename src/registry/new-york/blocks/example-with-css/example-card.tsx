import "./example-card.css";

export function ExampleCard() {
  return (
    <div class="login-container">
      <div class="login-card">
        <h2>Login</h2>
        <p class="subtitle">Please enter your credentials to continue</p>
        <form class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <button class="login-button" type="submit">
            Sign In
          </button>
        </form>
        <div class="login-footer">
          <button class="forgot-password-link" type="button">
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
}
