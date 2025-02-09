export async function login(username: string, password: string) {
    const response = await fetch("http://localhost:8085/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }
  
    return await response.json();
  }
  