CREATE TABLE IF NOT EXISTS pagamentos (
    id INTEGER PRIMARY KEY,
    codAssinatura BIGINT,
    valorPago DECIMAL(10,2) NOT NULL,
    dataPagamento DATE NOT NULL
);

INSERT INTO pagamentos (codAssinatura, valorPago, dataPagamento) VALUES
(2001, 49.90, '2024-01-01'),
(2002, 79.90, '2024-01-01'),
(2003, 99.90, '2024-01-01'),
(2004, 149.90, '2024-01-01'),
(2005, 199.90, '2024-01-01');