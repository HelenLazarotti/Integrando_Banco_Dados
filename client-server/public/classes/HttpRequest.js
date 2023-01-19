class HttpRequest {

    //crio métodos estáticos:

    static get(url, params = {}){
        return HttpRequest.request('GET', url, params);
    }

    static post(url, params = {}){
        return HttpRequest.request('POST', url, params);
    }

    static delete(url, params = {}){
        return HttpRequest.request('DELETE', url, params);
    }

    static put(url, params = {}){
        return HttpRequest.request('PUT', url, params);
    }

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {
            //abro requisição
            let ajax = new XMLHttpRequest();

            //digo p pegar meu users
            ajax.open(method.toUpperCase(), url);

            //carrega meu objeto, transformo em objeto
            ajax.onload = event => {
                let obj = {};

                try {
                    //se conseguir sobreescreve obj vazio de cima:
                    obj = JSON.parse(ajax.responseText);

                } catch (e) {
                    reject(e);
                    console.log(e);
                }

                resolve(obj);
            }
            ajax.setRequestHeader('Content-Type', 'application/json')
            //mando:
            ajax.send(JSON.stringify(params));
        })

    }
}