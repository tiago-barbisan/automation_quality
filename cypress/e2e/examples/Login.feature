Feature: Tarefa 2 do Desafio de Automacao

    Scenario: Validar os inputs do Login
        Given i access homepage
        When i access login page 
        And user fill username and password field and click submit
        Then error message show display