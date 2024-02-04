package com.invoiceprocessing.server.dao;

import com.invoiceprocessing.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface InvoiceDao extends JpaRepository<Invoice, Long> {

}
