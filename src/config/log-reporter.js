const Mocha = require('mocha');
const logger = require('./loggerApi.conf');
const {
  EVENT_RUN_BEGIN,
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS,
  EVENT_SUITE_BEGIN,
  EVENT_SUITE_END,
} = Mocha.Runner.constants;

class LogReporter {
  constructor(runner) {
    this._indents = 0;
    const stats = runner.stats;

    runner
      .once(EVENT_RUN_BEGIN, () => {
        console.log('START');
      })
      .on(EVENT_SUITE_BEGIN, () => {
        this.increaseIndent();
      })
      .on(EVENT_SUITE_END, () => {
        this.decreaseIndent();
      })
      .on(EVENT_TEST_PASS, (test) => {
        logger.info(`${this.indent()}\nstatus: PASS - ${test.fullTitle()}`);
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        logger.error(
          `${this.indent()}\nstatus: FAIL - ${test.fullTitle()} - ERROR: ${err.message}`
        );
      })
      .once(EVENT_RUN_END, () => {
        logger.info(`\nRESULT: ${stats.passes}/${stats.passes + stats.failures} OK`);
      });
  }

  indent() {
    return Array(this._indents).join('  ');
  }

  increaseIndent() {
    this._indents++;
  }

  decreaseIndent() {
    this._indents--;
  }
}

module.exports = LogReporter;
