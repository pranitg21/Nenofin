package org.example.Service;

import org.example.Model.LoanFormModel;
import org.example.Repository.LoanFormRepo;

import java.util.List;

public class LoanFormServices {
    private LoanFormRepo loanRepository = new LoanFormRepo();

    public boolean applyForLoan(LoanFormModel loan) {
        return loanRepository.saveLoanApplication(loan);
    }

    public List<LoanFormModel> getAllLoanApplications() {
        return loanRepository.getAllLoans();
    }
}
