const stringToHighlight = 'Donec sodales placerat dui';

// You might want to merge the items a little smarter than that
function getTextItemWithNeighbors(textItems, itemIndex, span = 1) {
  return textItems.slice(
    Math.max(0, itemIndex - span), 
    itemIndex + 1 + span
  )
    .filter(Boolean)
    .map(item => item.str)
    .join('');
}

function getIndexRange(string, substring) {
  const indexStart = string.indexOf(substring);
  const indexEnd = indexStart + substring.length;

  return [indexStart, indexEnd];
}

function Test() {
  const [textItems, setTextItems] = useState();

  const onPageLoadSuccess = useCallback(async page => {
    const textContent = await page.getTextContent();
    setTextItems(textContent.items);
  }, []);

  const customTextRenderer = useCallback(textItem => {
    if (!textItems) {
      return;
    }

    const { itemIndex } = textItem;

    const matchInTextItem = textItem.str.match(stringToHighlight);

    if (matchInTextItem) {
      // Found full match within current item, no need for black magic
      return highlightPattern(textItem.str, stringToHighlight);
    }

    // Full match within current item not found, let's check if we can find it
    // spanned across multiple lines

    // Get text item with neighbors
    const textItemWithNeighbors = getTextItemWithNeighbors(textItems, itemIndex);

    const matchInTextItemWithNeighbors = textItemWithNeighbors.match(stringToHighlight);

    if (!matchInTextItemWithNeighbors) {
      // No match
      return textItem.str;
    }

    // Now we need to figure out if the match we found was at least partially
    // in the line we're currently rendering
    const [matchIndexStart, matchIndexEnd] = getIndexRange(textItemWithNeighbors, stringToHighlight);
    const [textItemIndexStart, textItemIndexEnd] = getIndexRange(textItemWithNeighbors, textItem.str);

    if (
      // Match entirely in the previous line
      matchIndexEnd < textItemIndexStart ||
      // Match entirely in the next line
      matchIndexStart > textItemIndexEnd
    ) {
      return textItem.str;
    }

    // Match found was partially in the line we're currently rendering. Now
    // we need to figure out what does "partially" exactly mean

    // Find partial match in a line
    const indexOfCurrentTextItemInMergedLines = textItemWithNeighbors.indexOf(textItem.str);

    const matchIndexStartInTextItem = Math.max(0, matchIndexStart - indexOfCurrentTextItemInMergedLines);
    const matchIndexEndInTextItem = matchIndexEnd - indexOfCurrentTextItemInMergedLines;

    const partialStringToHighlight = textItem.str.slice(matchIndexStartInTextItem matchIndexEndInTextItem);

    return highlightPattern(textItem.str, partialStringToHighlight);
  }, [stringToHighlight, textItems]);

  return (
    <Document file={samplePDF}>
      <Page
        customTextRenderer={customTextRenderer}
        onLoadSuccess={onPageLoadSuccess}
        pageNumber={1}
      />
    </Document>
  );
}