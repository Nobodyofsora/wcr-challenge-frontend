export interface RegisterRequest {
    name: string;
    lastName: string;
    email: string;
    password: string;
    rePassword: string;
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