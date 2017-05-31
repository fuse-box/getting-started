import {should} from "fuse-test-runner";
import {count, calculate} from "./index";

export class BarTest {
    "Should be okay"() {
        should(count).beOkay();
    }

    "Should equal 2"() {
        should(calculate(count))
            .equal(2);
    }

    "Should not equal 2"() {
        should(calculate(5))
            .equal(2);
    }
}