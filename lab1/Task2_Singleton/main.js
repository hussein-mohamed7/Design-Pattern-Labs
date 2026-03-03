        class Singleton{
            static countrer = 0;
            static instance = null;
            constructor(data){
            Singleton.countrer++;
                if(Singleton.instance){
                    return Singleton.instance;
                }else{
                    Singleton.instance = this;
                    this.data = data;
                }
            }
            getData(){
                return this.data;
            }
            static getCountrer(){
                return Singleton.countrer;
            }
            static getInstance(){
                return Singleton.instance ? 1 : 0;
            }
        }
        let s1 = new Singleton("first");
        console.log(s1.getData());                    
        console.log(Singleton.getCountrer());
        console.log(Singleton.getInstance());  

        let s2 = new Singleton("second");
        console.log(s2.getData());                    
        console.log(Singleton.getCountrer());
        console.log(Singleton.getInstance());