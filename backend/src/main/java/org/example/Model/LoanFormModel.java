package org.example.Model;

public class LoanFormModel {
    private int id;
    private String fullName;
    private String email;
    private String phone;
    private double loanAmount;
    private int loanTerm;
    private String status;

    public LoanFormModel() {}

    public LoanFormModel(String fullName, String email, String phone, double loanAmount, int loanTerm) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.loanAmount = loanAmount;
        this.loanTerm = loanTerm;
        this.status = "PENDING"; // Default status
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public double getLoanAmount() { return loanAmount; }
    public void setLoanAmount(double loanAmount) { this.loanAmount = loanAmount; }

    public int getLoanTerm() { return loanTerm; }
    public void setLoanTerm(int loanTerm) { this.loanTerm = loanTerm; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
