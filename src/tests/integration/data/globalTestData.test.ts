
class globalTestData {

    static expiredAccessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhoSldIRklrSWJuYlZWRGtOclY5MSJ9.eyJpc3MiOiJodHRwczovL2Rldi0yYTJjZngwN2kwanc2amdqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzk0NDBjOGYyOTA2Nzc1MDc5YzcyNTQiLCJhdWQiOiJCYWNrZW5kRGV2IiwiaWF0IjoxNjc3Mzg2NzM2LCJleHAiOjE2Nzc0NzMxMzYsImF6cCI6ImhPSUdJa05FRlF3TFBtOTRYb0tSeWtPRGZCQUY0dTNGIiwic2NvcGUiOiJjcmVhdGU6c3Vkb2t1X3B1enpsZSB1cGRhdGU6c3Vkb2t1X3B1enpsZSBkZWxldGU6c3Vkb2t1X3B1enpsZSIsImd0eSI6InBhc3N3b3JkIiwicGVybWlzc2lvbnMiOlsiY3JlYXRlOnN1ZG9rdV9wdXp6bGUiLCJkZWxldGU6c3Vkb2t1X3B1enpsZSIsInVwZGF0ZTpzdWRva3VfcHV6emxlIl19.AGa61NnI_hmpBNhRt2qbmpAGxCFd8Cpm6k0IqVyuwxfQwaOV-1uKDO5yC6sl_ahl_rjM_0fTRBo2nVwyxrv1VDbF75piY-EOVcq_-dUzRv5vkPg-3zfBIfNz8jmpD9SctOFUkRYyChYHxrUr0qcEldZgc2tyTs2oFoZV31izRHQXxQhuz9Jxoh9jbVIj091BMz91OT7wml3GlVptjWlgPBt_a3gd5Ag4uUANJsfR0waXmXorkTQE5QoGcfx9WmPYVC4whTV3KLjoQpRF5fwQW2GRic4I3Udkc8D62zrD-vAzpPd9MKMtjq5h9VwVUu_qfEFuoUTVdSCH8XlVhSGQnA';

    /*
     * JSON Expected Error Responses
     */

    static ErrorMessage400 = {
        Error_Message: 'Invalid Request',
        Status: 400
    };

    static ErrorMessage401 = {
        Error_Message: 'Invalid Permission',
        Status: 401
    };

    static ErrorMessage404 = {
        Error_Message: 'Resource Not Found',
        Status: 404
    };

    static ErrorMessage500 = {
        Error_Message: 'Invalid Permission',
        Status: 401
    };
}

export { globalTestData };