package com.palati.util;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class MapUtil {
	/**
	 * Group a list by a grouping expression.
	 *
	 * @param list the list to group
	 * @param groupingExpression returns a key to group the list items by
	 * @return a transformed Map that contains all the entries of the List except they are keyed/grouped based on the {@code groupingExpression}
	 */
	public static <T, U> Map<T, List<U>> group(List<U> list, GroupingExpression<T, U> groupingExpression) {

		Map<T, List<U>> groupedMap = new LinkedHashMap<T, List<U>>();

		for(U item : list) {

			T key = groupingExpression.groupBy(item);

			List<U> keyedList = groupedMap.get(key);

			if(keyedList == null) {
				keyedList = new ArrayList<U>();
				groupedMap.put(key, keyedList);
			}

			keyedList.add(item);
		}

		return groupedMap;
	}

	/**
	 * Index a list into a map by a property that exists on the generic type.
	 *
	 * @param list
	 * @param groupingExpression
	 * @return
	 */
	public static <T, U> Map<T, U> index(List<U> list, GroupingExpression<T, U> groupingExpression) {

		Map<T, U> indexedMap = new LinkedHashMap<T, U>();

		for(Entry<T, List<U>> entry : group(list, groupingExpression).entrySet()) {
			indexedMap.put(entry.getKey(), entry.getValue().get(0));
		}

		return indexedMap;
	}

	public interface GroupingExpression<T, U> {
		T groupBy(U item);
	}
}
