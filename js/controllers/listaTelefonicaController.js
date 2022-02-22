angular.module("listaTelefonica", []);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) {
    $scope.app = "Lista Telefônica";

    $scope.contatos = [
        {nome: "Pedro", telefone: "4399999-9999", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, data: new Date()},
        {nome: "Maria", telefone: "4398888-8888", operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, data: new Date()},
        {nome: "Jão", telefone: "4397777-7777", operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, data: new Date()},
        {nome: "Ana", telefone: "4396666-6666", operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, data: new Date()},
    ];

    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular"},
        {nome: "Vivo", codigo: 15, categoria: "Celular"},
        {nome: "Tim", codigo: 41, categoria: "Celular"},
        {nome: "Embratel", codigo: 21, categoria: "Fixo"},
    ];

    $scope.adicionarContato = function(contato) {
        if(contato.nome.length < 5) {
            $scope.mensagemRodape = "É necessário que o campo nome tenha mais de 5 caracteres!";
    		document.getElementById("nome").focus();
            return;
        }

		$scope.contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.selecionaTodos = true;
        $scope.selecionarTodos($scope.contatos);
        $scope.selecionaTodos = false;
        $scope.mensagemRodape = false;
    };

    $scope.apagarContatos = function(contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if(!contato.selecionado) {
                return contato;
            }
        });

        $scope.selecionaTodos = false;
    };

    $scope.isContatoSelecionado = function(contatos) {
        return contatos.some(function(contato) {
            return contato.selecionado;
        });
    };

    $scope.selecionarTodos = function(contatos) {
        $scope.selecionaTodos = !$scope.selecionaTodos;
        if ($scope.selecionaTodos) {
            for (contato in contatos) {
                contatos[contato].selecionado = true;
            }
        } else {
            for (contato in contatos) {
                contatos[contato].selecionado = false;
            }
        }
    };

    $scope.ordenarPor = function(campo) {
        if ($scope.campoOrdenacao == '+'+campo || $scope.campoOrdenacao == '-'+campo) {
            $scope.reverseOrdenacao = !$scope.reverseOrdenacao;
        } else {
            $scope.reverseOrdenacao = false;
        }
        
        if ($scope.reverseOrdenacao) {
            $scope.campoOrdenacao = '-'+campo;	
        } else {
            $scope.campoOrdenacao = '+'+campo;
        }
    }
});