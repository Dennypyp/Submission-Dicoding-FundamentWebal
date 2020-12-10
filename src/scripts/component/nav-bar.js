class NavBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Dinamika Movies</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#">Movie <span class="sr-only">(current)</span></a>
            </li>
        </ul>
        <div class="col-xs-4">
            <div class="input-group">
                <input type="text" class="form-control input-keyword" placeholder="Search movie...">
                <div class="input-group-append">
                <button class="btn btn-primary search-button" type="button" id="button-addon2">Search</button>
            </div>
        </div>
        
        </div>
        </div>
</nav>`;
    }
}

customElements.define("nav-bar", NavBar);