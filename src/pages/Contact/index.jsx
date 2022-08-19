const Contact = () => {

    const toggleText = (id) => {
        document.getElementById(`text-${id}`).classList.toggle('hidden-h')
    }

    return (
        <div className="bg bg-main fade-out lg-padding-10 md-padding-1 sm-padding-1" id="page">
            <p className="lg-underline-1 sm-underline-1 md-underline-1 border-light padding-bottom-10">
                <br /><br />
                <h2 className="border-left-2 border-blue title">Contacter le cabinet :</h2>
                Le secrétariat téléphonique est ouvert du lundi au vendredi de 8 Heures à 20 Heures pour
                <ul className="ul-honoraires">
                    <li>Prendre rendez-vous</li>
                    <li>Laisser des messages</li>
                </ul>
                Vous pouvez également me joindre sur mon téléphone portable au 06.95.40.82.72 ou par email sur petit.viviane@avocat-conseil.fr
                <br /><br /><br />
                <h2 className="border-left-2 border-blue title">Venir au cabinet :</h2>
                Le cabinet est situé 2 Place Michel Ange à 49300 CHOLET, Batiment C (petit icone géolocalisation google).<br />
                Un parking gratuit est à votre disposition.
            </p>
            <br /><br></br>
            <h3 className="border-left-2 border-blue title">Honoraires</h3>
            <section>
                <p className="text-justify">L’honoraire est le mode de <b>rémunération du travail</b> demandé à l’avocat et inclus non seulement le travail visible (les rendez-vous, les audiences, les rédactions d’actes juridiques) mais également le travail invisible (recherches nécessaires à la préparation de la rédaction des actes, réflexion, temps de trajet, etc…) .
                    Il est déterminé selon les usages, notamment en fonction de la difficulté de l’affaire, du temps consacré à celle-ci, des diligences à effectuer, de la situation de fortune du client et de l’expérience de l’avocat (article 10, alinéa 2 de la loi du 31 décembre 1971, article 10 du décret du 12 juillet 2005, article 11.1 du Règlement intérieur national de la profession d’avocat).
                    Il existe différents types d’honoraires :
                    <ul className="ul-honoraires">
                        <li>L’honoraire forfaitaire</li>
                        <li>L’honoraire au temps passé</li>
                        <li>L’honoraires complémentaire de résultat</li>
                        <li>Le contrat d’abonnement</li>
                    </ul>
                    Quel que soit le type d’honoraires, la signature d’une <b>convention d’honoraires</b> est obligatoire en toutes matières depuis la loi n° 2015-990 du 6 août 2015, et permet de déterminer les honoraires dont le client devra s’acquitter pour le traitement de son affaire.</p>
            </section>
            <br /><br />
            <section>
                <br />
                <h3 className="honoraire-title" onClick={() => {toggleText(1)}}>L’honoraire forfaitaire </h3>
                <p className="text-justify hidden-h margin-left-2" id="text-1">Après une première analyse de votre dossier et en fonction des objectifs à atteindre et du résultat escompté, l’avocat pourra définir une rémunération globale pour l’ensemble des étapes du dossier.
                    Lorsqu’il est possible de mettre en place ce mode de rémunération, cela permet au client de prévoir à l’avance et de manière définitive le montant des honoraires dus à l’avocat.
                    La convention peut prévoir des compléments d’honoraires en fonction de l’évolution du dossier, si celui - ci se complexifie et nécessite d’accomplir des diligences supplémentaires non prévues initialement. </p >
                <h3 className="honoraire-title" onClick={() => {toggleText(2)}}>L’honoraire au temps passé  </h3>
                <p className="text-justify hidden-h margin-left-2" id="text-2">Ce type d’honoraires peut être proposé par l’avocat lorsqu’il est impossible d’évaluer exactement le nombre d’<b>heures de travail</b> nécessaires pour le traitement de votre dossier.
                    Le montant des honoraires est fixé suivant le taux horaire de l’avocat, en fonction du nombre d’heures de travail effectuées.</p>
                <h3 className="honoraire-title" onClick={() => {toggleText(3)}}>L’honoraire complémentaire de résultat </h3>
                <p className="text-justify hidden-h margin-left-2" id="text-3">La convention d’honoraires peut prévoir, en plus de l’honoraire de base (forfaitaire ou au temps passé), un honoraire complémentaire de résultat, rémunérant l’avocat suivant un <b>pourcentage du résultat obtenu ou du service rendu</b>.
                    En France, il est interdit de prévoir des honoraires en fonction du seul résultat à intervenir : c’est ce que l’on appelle la prohibition du pacte de quota litis.</p>
                <h3 className="honoraire-title" onClick={() => {toggleText(4)}}>Le contrat d’abonnement  </h3>
                <p className="text-justify hidden-h margin-left-2" id="text-4">L’avocat peut prévoir avec son client des <b>honoraires forfaitaires</b> pour une période déterminée et reconductible (<b>mensuel</b>, <b>trimestriel</b>, <b>annuel</b>…).
                    Ce mode de rémunération, plus couramment appliqué en matière de conseil pour des clients institutionnels, permet une facturation à un tarif privilégié suivant le nombre d’heures de conseil allouées, les prestations comprises dans l’abonnement et sa fréquence.</p>
            </section>
            <br />
            <br />
            <section>
                <br /><h3 className="border-blue border-left-2 title">Les aides au règlement des honoraires</h3>
                L’aide <b>juridictionnelle</b> et les contrats d’assurance de <b>protection juridique</b>  constituent deux mécanismes distincts d’aides au règlement des honoraires de l’avocat.
                <br /><br /><h3 className="honoraire-title" onClick={() => {toggleText(5)}}>L’assurance de protection juridique</h3>
                <p className="text-justify hidden-h margin-left-2" id="text-5">L’assurance de protection juridique est définie par l’article L. 127-1 du code des assurances comme « toute opération consistant (…) à prendre en charge des frais de procédure ou à fournir des services (…), en cas de différend ou de litige opposant l’assuré à un tiers, en vue notamment de défendre ou de représenter en demande l’assuré dans une procédure civile, pénale, administrative ou autre ou contre une réclamation dont il est l’objet ou d’obtenir réparation à l’amiable du dommage subi ».
                    L’assurance de protection juridique peut être contenue dans un contrat spécifique ou en annexe à un autre <b>contrat d’assurance</b> (multirisque habitation, automobile, bancaire…).
                    Si le client dispose d’une telle <b>garantie</b>, il convient de vérifier le contenu du contrat afin de savoir quels sont les <b>risques couverts</b>.
                    Le <b>litige</b> constitue l’évènement générateur du <b>sinistre</b> qui conditionne l’application de la garantie de l’assureur.
                    Les sinistres dont l’origine est antérieure à la souscription du contrat ne sont donc pas couverts par celui-ci.
                    En outre, les litiges issus de la seule volonté de l’assuré sont nécessairement exclus des assurances de protection juridique en raison de l’aléa que comporte tout contrat d’assurance.
                    Si l’assureur donne son accord sur le principe de la saisine de l’avocat, l’assuré conserve le libre choix de son avocat.
                    Les honoraires de l’avocat restent déterminés entre ce dernier et son client. Ainsi, les honoraires de l’avocat peuvent dépasser le montant pris en charge par l’assurance de protection juridique suivant son barème d’indemnisation. Ce reliquat d’honoraires restera donc à la charge du client.
                    Enfin, l’assureur bénéficie du principe de <b>subrogation</b> : « toute somme obtenue en remboursement des frais et honoraires exposés pour le règlement du litige bénéficie par priorité à l’assuré pour les dépenses restées à sa charge et, subsidiairement, à l’assureur dans la limite des sommes qu’il a engagées » (article 127-8 code des assurances).</p>
                <h3 className="honoraire-title" onClick={() => {toggleText(6)}}>L’aide juridictionnelle</h3>
                <p className="text-justify hidden-h margin-left-2" id="text-6">Ce système d’aide permet aux personnes physiques, dont les ressources sont insuffisantes pour faire valoir leurs droits en Justice, de bénéficier d’une <b>aide juridictionnelle totale</b> ou <b>partielle</b>.
                    L’aide juridictionnelle est régie par la loi n° 91-647 du 10 juillet 1991 relative à l’aide juridique dont les dispositions visent à assurer l’accès de tous à la <b>justice</b> et au <b>droit</b>.
                    L’aide juridictionnelle s’applique à toutes les juridictions françaises, en matière gracieuse ou contentieuse, en demande ou en défense, dans toutes les matières.
                    Pour pouvoir bénéficier de l’aide juridictionnelle, il est nécessaire de déposer une demande devant le <b>Bureau d’aide juridictionnelle</b> compétent, qui est celui du tribunal judiciaire duquel dépend le litige concerné.
                    Attention, l’aide juridictionnelle n’est pas accordée lorsque les frais couverts par cette aide sont pris en charge au titre d’un contrat d’assurance de protection juridique.
                    L’octroi de l’aide juridictionnelle est soumis à plusieurs conditions :
                    <ul className="ul-honoraires">
                        <li>Etre une personne physique, de nationalité française ou un ressortissant d’un Etat membre de l’Union européenne. Une personne de nationalité étrangère (hors UE) peut également être admise au bénéfice de l’aide juridictionnelle si elle réside habituellement et régulièrement en France.</li>
                        <li>Justifier que ses ressources mensuelles ne dépassent pas les plafonds fixés chaque année par décret.</li>
                        <li>L’aide juridictionnelle est accordée à la personne dont l’action n’apparaît pas manifestement irrecevable ou dénuée de fondement, sauf en matière pénale ou lorsque l’intéressé est défendeur à l’action ou encore civilement responsable.</li>
                    </ul>
                    Si le demandeur a choisi un avocat, il doit déposer son dossier de demande d’aide juridictionnelle accompagné du formulaire d’acceptation de mission régularisé par son conseil.
                    A défaut, un avocat est désigné d’office par le <b>Bâtonnier</b> du <b>Barreau</b> concerné.
                    L’aide accordée peut être totale ou partielle.
                    En cas d’aide juridictionnelle partielle, l’avocat devra établir une convention d’honoraires avec le client, soumise à l’appréciation du Bâtonnier.</p>
                <br /><br /><p>Si vous disposez d’un contrat d’assurance de protection juridique je vous remercie de me l’indiquer lors de notre premier rendez-vous.
                    Si vous pensez être éligible à l’aide juridictionnelle totale, je vous informe que je suis susceptible de refuser d’intervenir au titre de cette aide dans les domaines où l’indemnité versée par l'Etat est insuffisante pour couvrir les frais de structure du cabinet et/ou ne permet pas de recevoir une rémunération digne.</p>
            </section>
            <p className="hand-signed">Viviane PETIT</p>
        </div>
    )
}

export default Contact