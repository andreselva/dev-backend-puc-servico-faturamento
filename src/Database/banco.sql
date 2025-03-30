CREATE TABLE IF NOT EXISTS pagamentos (
    id INTEGER PRIMARY KEY,
    codAssinatura BIGINT,
    valorPago DECIMAL(10,2) NOT NULL,
    dataPagamento DATE NOT NULL
);

INSERT INTO pagamentos (codAssinatura, valorPago, dataPagamento) VALUES
(3001, 49.90, '2024-01-01'),
(3002, 79.90, '2024-01-01'),
(3003, 99.90, '2024-01-01'),
(3004, 149.90, '2024-01-01'),
(3005, 199.90, '2024-01-01');