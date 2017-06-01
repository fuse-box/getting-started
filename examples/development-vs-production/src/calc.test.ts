import {should} from "fuse-test-runner";
import {calculate} from "./calc";
export class CalculatorTest {
    "It should be okay"() {
        should(calculate).beOkay().beFunction();
    }

    "Should increment a value"() {
        should(calculate(5))
            .beOkay()
            .beNumber()
            .equal(6)
    }
}