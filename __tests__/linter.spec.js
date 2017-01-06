import { CLIEngine } from 'eslint';
import eslintConfig from '../.eslintrc';

describe('linter', () => {
  it('should not throw warnings or errors', () => {
    const cli = new CLIEngine(eslintConfig);
    const report = cli.executeOnFiles(['src/', '__tests__/']);
    expect(report.errorCount).toBe(0);
    expect(report.warningCount).toBe(0);
  });
});
