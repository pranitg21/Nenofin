package org.example.Controller;

import org.example.Model.LoanFormModel;
import org.example.Service.LoanFormServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
@CrossOrigin("*") // Allows frontend requests
public class LoanFormController {
    private LoanFormServices loanService = new LoanFormServices();

    @PostMapping
    public String applyForLoan(@RequestBody LoanFormModel loan) {
        boolean success = loanService.applyForLoan(loan);
        return success ? "Loan application submitted successfully!" : "Failed to submit application.";
    }

    @GetMapping
    public List<LoanFormModel> getAllLoans() {
        return loanService.getAllLoanApplications();
    }
}
