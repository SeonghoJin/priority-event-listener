const $f3b6405f999a9a60$export$84ee6ca3b8783f90 = (obj)=>{
    if (obj.clone) return true;
    return false;
};


const $e5727be6b4051a99$export$6c40052bed430212 = (obj)=>{
    if ($f3b6405f999a9a60$export$84ee6ca3b8783f90(obj)) return obj.clone();
    else if (typeof obj === 'string' || typeof obj === 'function') return obj;
    else if (obj.length !== undefined) return Array.from(obj);
    else if (typeof obj === 'object' && obj !== null) {
        const clone = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
        for(const key in obj)if (typeof clone[key] !== 'function') clone[key] = $e5727be6b4051a99$export$6c40052bed430212(obj[key]);
        return clone;
    }
    return obj;
};


class $bfa205a3604cb3e2$export$674cd7dcb504ac5c {
    #map = new Map();
    #defalutValue;
    get defaultValue() {
        return $e5727be6b4051a99$export$6c40052bed430212(this.#defalutValue);
    }
    constructor(defaultValue){
        this.#defalutValue = defaultValue;
    }
    set(key, value) {
        this.#map.set(key, value);
    }
    get(key) {
        const value = this.#map.get(key);
        if (value === undefined) {
            this.#map.set(key, this.defaultValue);
            return this.#map.get(key);
        }
        return value;
    }
    delete(key) {
        this.#map.delete(key);
    }
}


class $4d544693cc3c5982$export$4994f107c6e9cbba {
    eventArray = [];
    filter = false;
    off = false;
    #filterEventArrayIfFilterIsTrue = ()=>{
        if (this.filter) {
            const filteredEventArray = this.eventArray.filter(Boolean);
            this.eventArray.splice(0, this.eventArray.length);
            this.eventArray.push(...filteredEventArray);
        }
    };
    execute = (...args)=>{
        this.#filterEventArrayIfFilterIsTrue();
        if (this.off) return undefined;
        this.eventArray.forEach((event)=>{
            event(...args);
        });
    };
    clone() {
        return new $4d544693cc3c5982$export$4994f107c6e9cbba();
    }
}


class $a2ea087c3b673994$export$4fae95256245c8c0 {
    #eventMap = new $bfa205a3604cb3e2$export$674cd7dcb504ac5c(new $4d544693cc3c5982$export$4994f107c6e9cbba());
    once = (key, value)=>{
        const eventContext = this.#eventMap.get(key);
        const { eventArray: eventArray  } = eventContext;
        const length = eventArray.length;
        eventArray.push((...args)=>{
            eventArray[length] = null;
            eventContext.filter = true;
            value?.(...args);
        });
    };
    emit = (key, ...args)=>{
        const eventContext = this.#eventMap.get(key);
        eventContext.execute(...args);
    };
    on = (key, value)=>{
        const eventContext = this.#eventMap.get(key);
        const { eventArray: eventArray  } = eventContext;
        eventContext.off = false;
        if (value !== undefined) eventArray.push(value);
    };
    off = (key)=>{
        const eventContext = this.#eventMap.get(key);
        eventContext.off = true;
    };
    delete = (key)=>{
        this.#eventMap.delete(key);
    };
}





export {$a2ea087c3b673994$export$4fae95256245c8c0 as EventEmitter, $4d544693cc3c5982$export$4994f107c6e9cbba as EventContext};
//# sourceMappingURL=index.js.map
