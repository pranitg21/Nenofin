package org.example.Repository;

import org.example.Model.LoanFormModel;
import org.example.util.DatabaseConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class LoanFormRepo {

    public boolean saveLoanApplication(LoanFormModel loan) {
        String query = "INSERT INTO loan_applications (full_name, email, phone, loan_amount, loan_term, status) VALUES (?, ?, ?, ?, ?, ?)";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {

            stmt.setString(1, loan.getFullName());
            stmt.setString(2, loan.getEmail());
            stmt.setString(3, loan.getPhone());
            stmt.setDouble(4, loan.getLoanAmount());
            stmt.setInt(5, loan.getLoanTerm());
            stmt.setString(6, loan.getStatus());

            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<LoanFormModel> getAllLoans() {
        List<LoanFormModel> loans = new ArrayList<>();
        String query = "SELECT * FROM loan_applications";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                LoanFormModel loan = new LoanFormModel();
                loan.setId(rs.getInt("id"));
                loan.setFullName(rs.getString("full_name"));
                loan.setEmail(rs.getString("email"));
                loan.setPhone(rs.getString("phone"));
                loan.setLoanAmount(rs.getDouble("loan_amount"));
                loan.setLoanTerm(rs.getInt("loan_term"));
                loan.setStatus(rs.getString("status"));

                loans.add(loan);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return loans;
    }
}
