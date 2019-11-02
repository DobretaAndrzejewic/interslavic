export type Gender = 'masculine' | 'feminine' | 'neuter' | 'masculine or feminine';

function getArr(str) {
    return str.replace(/ /g, '').split('.');
}

export function getGender(details: string): Gender {
    if (details.indexOf('m./f.') !== -1) {
        return 'masculine or feminine';
    }
    const arr = getArr(details);
    if (arr.indexOf('m') !== -1) {
        return 'masculine';
    }
    if (arr.indexOf('f') !== -1) {
        return 'feminine';
    }
    return 'neuter';
}

export function isPlural(details: string): boolean {
    return getArr(details).indexOf('pl') !== -1;
}

export function isSingular(details: string): boolean {
    return getArr(details).indexOf('sg') !== -1;
}

export function isAnimated(details: string): boolean {
    return getArr(details).indexOf('anim') !== -1;
}

export function isIndeclinable(details: string): boolean {
    return getArr(details).indexOf('indecl') !== -1;
}

export function getNumeralType(details: string): string {
    const arr = getArr(details);

    if (arr.indexOf('card') !== -1) {
        return 'cardinal';
    }

    if (arr.indexOf('coll') !== -1) {
        return 'collective';
    }

    if (arr.indexOf('fract') !== -1) {
        return 'fractional';
    }

    if (arr.indexOf('subst') !== -1) {
        return 'substantivized';
    }

    if (arr.indexOf('diff') !== -1) {
        return 'differential';
    }

    if (arr.indexOf('mult') !== -1) {
        return 'multiplicative';
    }

    if (arr.indexOf('ord') !== -1) {
        return 'ordinal';
    }
}

export function getPronounType(details: string): string {
    const arr = getArr(details);

    if (arr.indexOf('pers') !== -1) {
        return 'personal';
    }

    if (arr.indexOf('dem') !== -1) {
        return 'demonstrative';
    }

    if (arr.indexOf('indef') !== -1) {
        return 'indefinite';
    }

    if (arr.indexOf('refl') !== -1) {
        return 'reflexive';
    }

    if (arr.indexOf('rel') !== -1) {
        return 'relative';
    }

    if (arr.indexOf('poss') !== -1) {
        return 'possessive';
    }

    if (arr.indexOf('int') !== -1) {
        return 'interrogative';
    }
}

// + adj - adjective - прилагательное
// + adv - adverb - наречие
// + conj - conjunction - союз
// + f - feminine noun - существительное женского рода
// + i - imperfective verb - несовершенный глагол (что делать?)
// + intj - interjection - междометие
// + iv - intransitive verb - непереходный глагол
// + m - inanimate masculine noun - существительное мужского рода неодушевлённое
// + m anim - animate masculine noun - существительное мужского рода одушевлённое
// - mv - modal (auxiliary) verb - модальный глагол
// + n - noun; neuter noun - существительное среднего рода
// - p - perfective verb - совершенный глагол (что сделать?)
// + pl - plural - множественное число
// + prep - preposition - предлог
// + pron - pronoun - местоимение
// - tv - transitive verb - переходный глагол

export type VerbType = 'imperfective' | 'intransitive' | 'modal' | 'perfective' | 'transitive';

export function getVerbType(details: string): VerbType {
    const arr = getArr(details);
    if (arr.indexOf('i') !== -1) {
        return 'imperfective';
    }

    if (arr.indexOf('iv') !== -1) {
        return 'intransitive';
    }

    if (arr.indexOf('mv') !== -1) {
        return 'modal';
    }

    if (arr.indexOf('p') !== -1) {
        return 'perfective';
    }

    if (arr.indexOf('tv') !== -1) {
        return 'transitive';
    }
}

export type PartOfSpeech =
    'adjective' |
    'noun' |
    'adverb' |
    'conjunction' |
    'preposition' |
    'pronoun' |
    'interjection' |
    'verb' |
    'numeral'
;

export function getPartOfSpeech(details: string): PartOfSpeech {
    const arr = getArr(details);
    if (arr.indexOf('adj') !== -1) {
        return 'adjective';
    }
    if (
        arr.indexOf('f') !== -1 ||
        arr.indexOf('n') !== -1 ||
        arr.indexOf('m') !== -1
    ) {
        return 'noun';
    }
    if (arr.indexOf('adv') !== -1) {
        return 'adverb';
    }
    if (arr.indexOf('conj') !== -1) {
        return 'conjunction';
    }
    if (arr.indexOf('prep') !== -1) {
        return 'preposition';
    }
    if (arr.indexOf('pron') !== -1) {
        return 'pronoun';
    }
    if (arr.indexOf('num') !== -1) {
        return 'numeral';
    }
    if (arr.indexOf('intj') !== -1) {
        return 'interjection';
    }
    if (
        arr.indexOf('i') !== -1 ||
        arr.indexOf('iv') !== -1 ||
        arr.indexOf('mv') !== -1 ||
        arr.indexOf('p') !== -1 ||
        arr.indexOf('v') !== -1 ||
        arr.indexOf('tv') !== -1
    ) {
        return 'verb';
    }

}
