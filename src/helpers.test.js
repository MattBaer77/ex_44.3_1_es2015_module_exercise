import {choice, remove} from './helpers'

// TEST CHOICE

test('choice - SUCCESS - item chosen from mixed array', () => {

    const choiceArr = [1,"t","T", 9,"9"]
    const chosen = choice(choiceArr)
    expect(choiceArr).toContain(chosen)

})

// TEST REMOVE

test('remove - SUCCESS - item removed - array of nums', () => {
    const removeArr = [1,2,3,4]
    const arrWithRemoved = remove(removeArr, 3)

    expect(removeArr).toEqual([1,2,4])
    expect(arrWithRemoved).toEqual([3])
})

test('remove - SUCCESS - item removed - array of letters', () => {
    const removeArr = ["o","t","T","f"]
    const arrWithRemoved = remove(removeArr, "t")

    expect(removeArr).toEqual(["o", "T", "f"])
    expect(arrWithRemoved).toEqual(["t"])
})

test('remove - SUCCESS - item removed - array of letters - Capital Distinction', () => {
    const removeArr = ["o","t","T","f"]
    const arrWithRemoved = remove(removeArr, "T")

    expect(removeArr).toEqual(["o", "t", "f"])
    expect(arrWithRemoved).toEqual(["T"])
})

test('remove - SUCCESS - item not found - return undefined - array of letters', () => {
    const removeArr = ["o","t","T","f"]
    const arrWithRemoved = remove(removeArr, "x")

    expect(removeArr).toEqual(["o", "t", "T", "f"])
    expect(arrWithRemoved).toEqual(undefined)
})

test('remove - SUCCESS - item not found - array of nums', () => {
    const removeArr = [1,2,3,4]
    const arrWithRemoved = remove(removeArr, 5)

    expect(removeArr).toEqual([1,2,3,4])
    expect(arrWithRemoved).toEqual(undefined)
})

// 

test('remove - SUCCESS - item removed - array of mixed types', () => {
    const removeArr = [1,"t","T", 9,"9"]
    const arrWithRemoved = remove(removeArr, "t")

    expect(removeArr).toEqual([1,"T", 9,"9"])
    expect(arrWithRemoved).toEqual(["t"])
})

test('remove - SUCCESS - item not found - return undefined - array of mixed types', () => {
    const removeArr = [1,"t","T", 9,"9"]
    const arrWithRemoved = remove(removeArr, "x")

    expect(removeArr).toEqual([1,"t","T", 9,"9"])
    expect(arrWithRemoved).toEqual(undefined)
})

test('remove - SUCCESS - item removed - array of mixed types - Capital Distinction', () => {
    const removeArr = [1,"t","T", 9,"9"]
    const arrWithRemoved = remove(removeArr, "T")

    expect(removeArr).toEqual([1,"t", 9,"9"])
    expect(arrWithRemoved).toEqual(["T"])
})

test('remove - SUCCESS - item removed - array of mixed types - String Distinction', () => {
    const removeArr = [1,"t","T", 9,"9"]
    const arrWithRemoved = remove(removeArr, "9")

    expect(removeArr).toEqual([1,"t","T", 9])
    expect(arrWithRemoved).toEqual(["9"])
})

test('remove - SUCCESS - item removed - array of mixed types - Num Distinction', () => {
    const removeArr = [1,"t","T", 9,"9"]
    const arrWithRemoved = remove(removeArr, 9)

    expect(removeArr).toEqual([1,"t","T","9"])
    expect(arrWithRemoved).toEqual([9])
})
