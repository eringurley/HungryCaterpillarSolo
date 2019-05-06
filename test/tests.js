import feedSushis from '../src/feed-sushis.js';
const test = QUnit.test;

test('Test adding a sushi segment', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const sushiName = 'sushi';
    const div = document.createElement('div');
    const expected = '<span class="part sushi"></span>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = feedSushis(sushiName, div);
    
    //Assert
    assert.equal(result, expected);
});