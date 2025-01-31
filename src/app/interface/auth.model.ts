export interface RegisterRequest {
    name: string;
    lastname: string;
    email: string;
    password: string;
    repassword: string;
}

export interface RegisterResponse {
    message: string;
    error?: string; 
}

export interface LoginRequest {
    email: string;
    password: string;
} 

export interface LoginResponse {
    message: string;
    error?: string;
}