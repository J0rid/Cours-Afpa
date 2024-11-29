class EventHandler {

    static triggerEvent(elemHtml, triggeredEvent, callBack) {
        elemHtml.addEventListener(triggeredEvent, (e) => {
            e.preventDefault();
            callBack();
        })
    }
}

export default EventHandler;