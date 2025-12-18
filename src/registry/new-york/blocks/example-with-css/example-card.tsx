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
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="login-button">
            Sign In
          </button>
        </form>
        <div class="login-footer">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
