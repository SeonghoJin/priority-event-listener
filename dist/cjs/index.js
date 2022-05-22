function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "EventEmitter", () => $cdbc1d10745d321c$export$4fae95256245c8c0);
$parcel$export(module.exports, "EventContext", () => $22d40b71fa14cda3$export$4994f107c6e9cbba);
const $492942374a87b671$export$84ee6ca3b8783f90 = (obj)=>{
    if (obj.clone) return true;
    return false;
};


const $b33c6171ef908850$export$6c40052bed430212 = (obj)=>{
    if ($492942374a87b671$export$84ee6ca3b8783f90(obj)) return obj.clone();
    else if (typeof obj === 'string' || typeof obj === 'function') return obj;
    else if (obj.length !== undefined) return Array.from(obj);
    else if (typeof obj === 'object' && obj !== null) {
        const clone = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
        for(const key in obj)if (typeof clone[key] !== 'function') clone[key] = $b33c6171ef908850$export$6c40052bed430212(obj[key]);
        return clone;
    }
    return obj;
};


class $6e00b2ecd715afc3$export$674cd7dcb504ac5c {
    #map = new Map();
    #defalutValue;
    get defaultValue() {
        return $b33c6171ef908850$export$6c40052bed430212(this.#defalutValue);
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


class $22d40b71fa14cda3$export$4994f107c6e9cbba {
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
        return new $22d40b71fa14cda3$export$4994f107c6e9cbba();
    }
}


class $cdbc1d10745d321c$export$4fae95256245c8c0 {
    #eventMap = new $6e00b2ecd715afc3$export$674cd7dcb504ac5c(new $22d40b71fa14cda3$export$4994f107c6e9cbba());
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





//# sourceMappingURL=index.js.map
